"use client";

import IntroText from '@/components/IntroText';
import React, { useEffect, useState } from 'react';
import { NPKData, HumidityData, PHData, TempData, SoilData } from '@/public/data/iotdatagenrator';
import { predictCrop } from '@/components/predictCrop';
/* import { Button, Card, CardContent, Typography } from '@/components/ui'; */
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import XaiGraph from '@/components/XaiGraph'; // Import the XAI Graph component

const Page: React.FC = () => {
    const [prediction, setPrediction] = useState<{ crop: string; yield: string } | null>(null);
    const [loading, setLoading] = useState(false);

    // Get the latest data entries
    const latestNPK = NPKData[NPKData.length - 1]; 
    const latestHumidity = HumidityData[HumidityData.length - 1]; 
    const latestPH = PHData[PHData.length - 1]; 
    const latestTemp = TempData[TempData.length - 1]; 
    const latestSoil = SoilData[SoilData.length - 1]; 

    const handlePrediction = () => {
        setLoading(true);
        if (latestNPK && latestHumidity && latestPH && latestTemp && latestSoil) {
            const inputData = {
                npkLevel: latestNPK.npkLevel,
                humidity: latestHumidity.humidity,
                phLevel: latestPH.phLevel,
                temperature: latestTemp.temperature,
                soilType: latestSoil.soilType,
            };

            const { crop, yield: estimatedYield } = predictCrop(inputData);
            setPrediction({ crop, yield: estimatedYield });
        }
        setLoading(false);
    };

    return (
        <div className="p-4">
            <IntroText 
                title="AI Recommendations" 
                description="Get tailored insights to optimize irrigation, planting, and pest control." 
            />
            <h2 className="mt-6 mb-4">Latest Sensor Data</h2>
            <Card className="mb-4 shadow-6dp">
                <CardContent>
                    {latestNPK && latestHumidity && latestPH && latestTemp && latestSoil ? (
                        <p  className="font-satoshi text-paragraph-lg">
                            <strong>Date:</strong> {latestNPK.date}, 
                            <strong> NPK Level:</strong> {latestNPK.npkLevel}, 
                            <strong> Humidity:</strong> {latestHumidity.humidity}%, 
                            <strong> pH Level:</strong> {latestPH.phLevel}, 
                            <strong> Temperature:</strong> {latestTemp.temperature}°C, 
                            <strong> Soil Type:</strong> {latestSoil.soilType}
                        </p>
                    ) : (
                        <p className='text-paragraph-md'>No data available.</p>
                    )}
                </CardContent>
            </Card>

            <Button 
                onClick={handlePrediction} 
                disabled={loading}
                className="mb-4 bg-primary-600 text-white-50  hover:bg-primary-700"
            >
                {loading ? 'Making Prediction...' : 'Make Prediction'}
            </Button>

            {prediction && (
                <Card className="shadow-6dp">
                    <CardContent>
                        <h2 className="font-satoshi">Predicted Crop and Yield</h2>
                        <p className="font-inter text-heading-desktop-h6">
                            <strong>Recommended Crop:</strong> {prediction.crop}
                        </p>
                        <p className="font-inter text-heading-desktop-h6">
                            <strong>Estimated Yield:</strong> {prediction.yield}
                        </p>
                        <XaiGraph crop={prediction.crop} yield={prediction.yield} /> {/* Include the XAI graph */}
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default Page;