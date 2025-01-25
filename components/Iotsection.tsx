// components/IotSection.js
import React from 'react';

const IotSection = ({ sensors }) => {
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