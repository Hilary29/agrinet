// components/InfoModal.tsx
import React from "react";
import TempSensor from "./TempSensor"; 
import PHSensor from "./PHSensor";
import NPKSensor from "./NPKSensor";
import HumiditySensor from "./HumiditySensor";

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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-3xl w-full">
        <div className="md:flex">
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold">{device.name}</h2>
            <p className="mt-4 text-lg"><strong>Type:</strong> {device.type}</p>
            <p className="mt-4 text-lg"><strong>Support:</strong> {device.support}</p>
            <p className="mt-4 text-lg"><strong>MCU:</strong> {device.typeMCU}</p>
            <p className="mt-4 text-lg"><strong>Status:</strong> {device.status}</p>
            <p className="mt-4 text-lg"><strong>Description:</strong> {device.description}</p>
            <p className="mt-4 text-lg"><strong>S.I. Unit:</strong> {device.unit}</p>
          </div>
          <div className="md:w-1/2 p-4">
            <div className="h-64 w-full">{renderGraph()}</div> {/* Graph rendering */}
          </div>
        </div>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white rounded-lg py-3 px-6 hover:bg-red-600 transition text-lg">
          Close
        </button>
      </div>
    </div>
  );
};

export default InfoDevice;