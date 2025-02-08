// PredictionModal.tsx
"use client";

import React from 'react';
import { Modal, Button } from '@mui/material';
import CropPredictionForm from '@/components/CropPredictionForm'; // Import the crop prediction form
import YieldPredictionForm from './YieldPredictionForm'; // Import the yield prediction form
import WateringTipsForm from '@/components/WateringTipsForm'; // Import the watering tips form

interface PredictionModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: string | null;
    onSubmit: (data: any, type: string) => void;
}

const PredictionModal: React.FC<PredictionModalProps> = ({ isOpen, onClose, type, onSubmit }) => {
    const renderForm = () => {
        switch (type) {
            case 'crop':
                return <CropPredictionForm onClose={onClose} onSubmit={(data) => onSubmit(data, 'crop')} />;
            case 'yield':
                return <YieldPredictionForm onClose={onClose} onSubmit={(data) => onSubmit(data, 'yield')} />;
            case 'watering':
                return <WateringTipsForm onClose={onClose} onSubmit={(data) => onSubmit(data, 'watering')} />;
            default:
                return null;
        }
    };

    return (
        <Modal open={isOpen} onClose={onClose}>
            <div className="flex flex-col p-6 bg-white-50 rounded-lg shadow-lg w-1/3 mx-auto mt-20">
                <h2 className="text-lg text-center mb-4">Prediction Form</h2>
                {renderForm()}
                <Button className="mt-4 bg-gray-500 text-white hover:bg-gray-400" onClick={onClose}>
                    Cancel
                </Button>
            </div>
        </Modal>
    );
};

export default PredictionModal;