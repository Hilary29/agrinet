// components/InfoModal.tsx
import React from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon
import TempSensor from "./Sensors/TempSensor"; 
import PHSensor from "./Sensors/PHSensor";
import NPKSensor from "./Sensors/NPKSensor";
import HumiditySensor from "./Sensors/HumiditySensor";

interface Device {
  name: string;
  type: string;
  support: string;
  typeMCU: string;
  description: string;
  unit: string; 
  status: "Active" | "Inactive";
}

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  device: Device | undefined;
}

const InfoDevice: React.FC<InfoModalProps> = ({ isOpen, onClose, device }) => {
  if (!isOpen || !device) return null;

  const renderGraph = () => {
    console.log("Rendering graph for device type:", device.type); // Debugging line
    switch (device.type) {
      case "Temperature sensor":
        return <TempSensor />;
      case "PH sensor":
        return <PHSensor />;
      case "NPK sensor":
        return <NPKSensor />;
      case "Humidity sensor":
        return <HumiditySensor />;
      default:
        return <div>No graph available for this device type.</div>; // Fallback message
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white-50 bg-opacity-50">
      <div className="bg-white-50 rounded-lg p-4 md:p-6 shadow-lg max-w-5xl w-full relative">
        <FaTimes 
          className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-gray-800" 
          onClick={onClose} 
          size={24} 
        />
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 p-2 md:p-4">
            <h2 className="text-xl md:text-2xl font-satoshi font-bold">{device.name}</h2>
            <p className="mt-2 text-base md:text-lg font-inter"><strong>Type:</strong> {device.type}</p>
            <p className="mt-2 text-base md:text-lg font-inter"><strong>Support:</strong> {device.support}</p>
            <p className="mt-2 text-base md:text-lg font-inter"><strong>MCU:</strong> {device.typeMCU}</p>
            <p className="mt-2 text-base md:text-lg font-inter"><strong>Status:</strong> {device.status}</p>
            <p className="mt-2 text-base md:text-lg font-inter"><strong>Description:</strong> {device.description}</p>
            <p className="mt-2 text-base md:text-lg font-inter"><strong>S.I. Unit:</strong> {device.unit}</p>
          </div>
          <div className="md:w-3/4 p-2 md:p-4 flex flex-col">
            <div className="flex-grow overflow-hidden"> {/* Allow for flexible growth and hide overflow */}
              <div className="h-full w-full">{renderGraph()}</div> {/* Graph rendering */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDevice;