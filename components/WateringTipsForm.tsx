"use client";

import React, { useState } from 'react';
import { Button, TextField, Grid, Typography } from '@mui/material';

interface WateringTipsFormProps {
    onClose: () => void;
    onSubmit: (data: WateringTipsData) => void;
}

// Define the data structure for watering tips
interface WateringTipsData {
    nitrogen: number;
    potassium: number;
    phosphorus: number;
    temperature: number;
    pH: number;
    humidity: number;
    soil_type: string;
    crop: string;
}

// Define a union type for the keys of WateringTipsData
type WateringTipsKeys = keyof WateringTipsData;

const WateringTipsForm: React.FC<WateringTipsFormProps> = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState<WateringTipsData>({
        nitrogen: 76,
        potassium: 48,
        phosphorus: 50,
        temperature: 22.4102,
        pH: 6.5,
        humidity: 76.8319,
        soil_type: "Loamy",
        crop: "Mango", // Example crop
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'soil_type' || name === 'crop' ? value : parseFloat(value),
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
                Watering Tips Form
            </Typography>
            <Grid container spacing={2}>
                {Object.keys(formData).map((key) => {
                    const typedKey = key as WateringTipsKeys; // Cast key to WateringTipsKeys
                    return (
                        <Grid item xs={12} key={key}>
                            <TextField
                                label={typedKey.charAt(0).toUpperCase() + typedKey.slice(1).replace(/_/g, ' ')} // Format label
                                name={typedKey}
                                type={typeof formData[typedKey] === 'number' ? 'number' : 'text'}
                                value={formData[typedKey]}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                    );
                })}
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit Tips
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default WateringTipsForm;