// YieldPredictionForm.tsx
"use client";

import React, { useState } from 'react';
import { Button, TextField, Grid, Typography } from '@mui/material';

interface YieldPredictionFormProps {
    onClose: () => void;
    onSubmit: (data: any) => void;
}

const YieldPredictionForm: React.FC<YieldPredictionFormProps> = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        item: '',
        average_rain_fall_mm_per_year: 1485,
        pesticides_tonnes: 121,
        avg_temp: 16.37,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'item' ? value : parseFloat(value),
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        onClose(); // Close the modal after submitting
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h6" gutterBottom>
                Yield Prediction Form
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Item"
                        name="item"
                        value={formData.item}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Average Rainfall (mm/year)"
                        name="average_rain_fall_mm_per_year"
                        type="number"
                        value={formData.average_rain_fall_mm_per_year}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Pesticides (tonnes)"
                        name="pesticides_tonnes"
                        type="number"
                        value={formData.pesticides_tonnes}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Average Temperature (°C)"
                        name="avg_temp"
                        type="number"
                        value={formData.avg_temp}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit Prediction
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default YieldPredictionForm;