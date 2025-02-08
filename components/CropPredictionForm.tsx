"use client";

import React, { useState } from 'react';
import { Button, TextField, Grid, Typography } from '@mui/material';

// Define the data structure for crop prediction
interface CropPredictionData {
    nitrogen: number;
    potassium: number;
    phosphorus: number;
    temperature: number;
    pH: number;
    humidity: number;
    soil_type: string;
}

interface CropPredictionFormProps {
    onClose: () => void;
    onSubmit: (data: CropPredictionData) => void;
}

const CropPredictionForm: React.FC<CropPredictionFormProps> = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState<CropPredictionData>({
        nitrogen: 76,
        potassium: 48,
        phosphorus: 50,
        temperature: 22.4102,
        pH: 6.5,
        humidity: 76.8319,
        soil_type: "Loamy",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'soil_type' ? value : parseFloat(value),
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData); // Submit the form data
        onClose(); // Close the modal after submitting
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h6" gutterBottom>
                Crop Prediction Form
            </Typography>
            <Grid container spacing={2}>
                {Object.keys(formData).map((key) => (
                    <Grid item xs={12} key={key}>
                        <TextField
                            label={key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')} // Format label
                            name={key}
                            type={typeof formData[key as keyof CropPredictionData] === 'number' ? 'number' : 'text'}
                            value={formData[key as keyof CropPredictionData]}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit Prediction
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default CropPredictionForm