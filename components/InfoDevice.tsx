import React from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon
import { Device } from '@/public/data/device'; // Adjust the import path accordingly

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  device: Device | undefined;
}

const InfoDevice: React.FC<InfoModalProps> = ({ isOpen, onClose, device }) => {
  if (!isOpen || !device) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black-50 bg-opacity-50">
      <div className="bg-white-50 rounded-lg p-6 shadow-lg max-w-5xl w-full relative">
        <FaTimes className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-gray-800" onClick={onClose} size={24} />
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl font-satoshi font-bold">{device.deviceName}</h2>
          <p className="mt-2 text-base md:text-lg font-inter"><strong>Device ID:</strong> {device.deviceId}</p>
          <p className="mt-2 text-base md:text-lg font-inter"><strong>Support:</strong> {device.support}</p>
          <p className="mt-2 text-base md:text-lg font-inter"><strong>API:</strong> {device.api}</p>
          <p className="mt-2 text-base md:text-lg font-inter"><strong>Type MCU:</strong> {device.typeMCU}</p>
          <p className="mt-2 text-base md:text-lg font-inter"><strong>Status:</strong> {device.status}</p>
          <p className="mt-2 text-base md:text-lg font-inter"><strong>Description:</strong> {device.description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoDevice;