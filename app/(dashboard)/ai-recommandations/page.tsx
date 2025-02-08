"use client";

import React, { useState } from 'react';
import IntroText from '@/components/IntroText';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { Brain } from 'lucide-react'; // Import the Brain icon from Lucide
import PredictionModal from '@/components/predictionModal'; // Import the PredictionModal
import axios from 'axios'; // Import Axios

// Define types for the different forms
interface CropPredictionData {
    nitrogen: number;
    potassium: number;
    phosphorus: number;
    temperature: number;
    pH: number;
    humidity: number;
    soil_type: string;
}

interface YieldPredictionData {
    item: string;
    average_rain_fall_mm_per_year: number;
    pesticides_tonnes: number;
    avg_temp: number;
}

interface WateringTipsData extends CropPredictionData {
    crop: string;
}

interface PredictionResponse {
    crop: { index: number; value: string }[];
    shap_values: number[];
}

const Page = () => {
    const [crops, setCrops] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [predictionType, setPredictionType] = useState<string | null>(null);
    const [shapValues, setShapValues] = useState<number[]>([]); // To store SHAP values

    const handleMakePrediction = (type: string) => {
        setPredictionType(type);
        setIsModalOpen(true);
    };

    const postCropPrediction = async (data: CropPredictionData) => {
        try {
            setLoading(true);
            const response = await axios.post('http://192.168.150.235:8001/prediction', data);
            setCrops(response.data.crop.map((c: { value: any; }) => c.value)); // Store only the crop names
            setShapValues(response.data.shap_values); // Store SHAP values
            console.log('Crop Prediction Response:', response.data); // Log the response
        } catch (err) {
            setError('Failed to make crop prediction. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
            setIsModalOpen(false);
        }
    };

    const postYieldPrediction = async (data: YieldPredictionData) => {
        try {
            setLoading(true);
            const response = await axios.post('http://192.168.150.235:8001/prevision', data);
            setCrops(response.data.crop.map((c: { value: any; }) => c.value)); // Store only the crop names
            setShapValues(response.data.shap_values); // Store SHAP values
            console.log('Yield Prediction Response:', response.data); // Log the response
        } catch (err) {
            setError('Failed to make yield prediction. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
            setIsModalOpen(false);
        }
    };

    const postWateringTips = async (data: WateringTipsData) => {
        try {
            setLoading(true);
            const response = await axios.post('http://192.168.150.235:8001/prediction/water', data);
            console.log('Watering Tips Response:', response.data); // Log the response
            // Handle watering tips response if needed
        } catch (err) {
            setError('Failed to get watering tips. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
            setIsModalOpen(false);
        }
    };

    const handleFormSubmit = (data: CropPredictionData | YieldPredictionData | WateringTipsData) => {
        if (predictionType === 'crop') {
            postCropPrediction(data as CropPredictionData);
        } else if (predictionType === 'yield') {
            postYieldPrediction(data as YieldPredictionData);
        } else if (predictionType === 'watering') {
            postWateringTips(data as WateringTipsData);
        }
    };

    const fetchExplanation = async () => {
        try {
            const response = await axios.post('/api/your-explanation-endpoint', {
                hg_ha_yield: 36613, // Or any dynamic yield you want
                shap_values: shapValues // Use the stored SHAP values
            });
            alert(response.data.text); // Display the explanation
        } catch (err) {
            console.error('Failed to fetch explanation:', err);
            setError('Failed to fetch explanation. Please try again.');
        }
    };

    return (
        <div className="md:p-6 bg-white-50">
            <IntroText
                title="AI Crop Prediction"
                description="Use AI to predict the best crops for your farm based on sensor data."
            />
            <main className="rounded-lg p-4 md:p-6 flex flex-col">
                <div className="flex flex-col items-center justify-center py-10 text-center">
                    <Brain className="w-24 h-24 text-gray-500 mb-4" />
                    <p className="mt-4">Make predictions about the best crops to plant based on your farm's data.</p>
                    <Button
                        onClick={() => handleMakePrediction('crop')}
                        className="mt-4 bg-green-500 text-white-50 font-semibold py-2 px-4 rounded-lg hover:bg-green-400 transition"
                    >
                        Make Crop Prediction
                    </Button>
                    <Button
                        onClick={() => handleMakePrediction('yield')}
                        className="mt-4 bg-yellow-500 text-white-50 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition"
                    >
                        Make Yield Prediction
                    </Button>
                    <Button
                        onClick={() => handleMakePrediction('watering')}
                        className="mt-4 bg-blue-500 text-white-50 font-semibold py-2 px-4 rounded-lg hover:bg-blue-400 transition"
                    >
                        Get Watering Tips
                    </Button>
                </div>

                {error && (
                    <Card className="mb-4 shadow-6dp">
                        <CardContent>
                            <Typography variant="body1" className="text-red-600">
                                {error}
                            </Typography>
                        </CardContent>
                    </Card>
                )}

                {crops.length > 0 && (
                    <Card className="shadow-6dp">
                        <CardContent>
                            <h2 className="font-satoshi">Recommended Crops</h2>
                            <ul>
                                {crops.map((crop, index) => (
                                    <li key={index}>{crop}</li>
                                ))}
                            </ul>
                            <Button
                                onClick={fetchExplanation}
                                className="mt-4 bg-blue-500 text-white-50 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition"
                            >
                                Explain Predictions
                            </Button>
                        </CardContent>
                    </Card>
                )}

                <PredictionModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    type={predictionType}
                    onSubmit={handleFormSubmit}
                />
            </main>
        </div>
    );
};

export default Page;