// components/IotSection.tsx
import React from 'react';

interface Sensor {
  name: string;
  value: number | string; // Allowing value to be either number or string
  unit: string;
}

interface IotSectionProps {
  sensors: Sensor[];
}

const IotSection: React.FC<IotSectionProps> = ({ sensors }) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <h2 className="text-xl font-semibold">IoT Sensor Data</h2>
      <ul>
        {sensors.map((sensor, index) => (
          <li key={index}>
            {sensor.name}: {sensor.value} {sensor.unit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IotSection;