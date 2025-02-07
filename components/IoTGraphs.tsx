"use client";
import React, { useState } from "react";
import TempSensor from "./Sensors/TempSensor";
import PHSensor from "./Sensors/PHSensor";
import NPKSensor from "./Sensors/NPKSensor";
import HumiditySensor from "./Sensors/HumiditySensor";

const IoTGraphs: React.FC = () => {
  const [selectedGraphType, setSelectedGraphType] = useState<string>("Temperature sensor");

  const renderGraph = () => {
    switch (selectedGraphType) {
      case "Temperature sensor":
        return <TempSensor />;
      case "PH sensor":
        return <PHSensor />;
      case "NPK sensor":
        return <NPKSensor />;
      case "Humidity sensor":
        return <HumiditySensor />;
      default:
        return <div className="text-center text-gray-500">No graph available for this device type.</div>;
    }
  };

  return (
    <div className="flex flex-col w-2/4 p-4 border-r border-green-200">
      <h2 className="text-xl font-bold mb-4">Graphs</h2>
      <select
        value={selectedGraphType}
        onChange={(e) => setSelectedGraphType(e.target.value)}
        className="border rounded-lg p-2 mb-4"
      >
        <option value="Temperature sensor">Temperature Sensor</option>
        <option value="PH sensor">PH Sensor</option>
        <option value="NPK sensor">NPK Sensor</option>
        <option value="Humidity sensor">Humidity Sensor</option>
      </select>
      <div className="flex-grow overflow-hidden">
        {renderGraph()}
      </div>
    </div>
  );
};

export default IoTGraphs;