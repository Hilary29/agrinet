// components/PHSensor.tsx
import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { PHData } from "@/public/data/iotdatagenrator";

const PHSensor: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, index) => currentYear - index);
  const [year, setYear] = useState(currentYear);

  const handleYearChange = (selectedYear: number) => {
    setYear(selectedYear);
  };

  interface CustomTickProps {
    x: number;
    y: number;
    payload: { value: string };
  }

  const CustomXAxisTick: React.FC<CustomTickProps> = ({ x, y, payload }) => (
    <g transform={`translate(${x},${y})`}>
      <rect x={-25} y={-10} width={50} height={20} fill="#f0f0f0" stroke="#ccc" />
      <text x={0} y={0} textAnchor="middle" dominantBaseline="middle">{payload.value}</text>
    </g>
  );

  return (
    <div>
      <div className="bg-white shadow-6dp rounded-lg p-4">
        <h3 className="font-satoshi font-semibold text-heading-desktop-h6 mb-4">PH Sensor</h3>
        <div className="flex space-x-4 mb-4">
          {years.map((yearOption) => (
            <button
              key={yearOption}
              onClick={() => handleYearChange(yearOption)}
              className={`border rounded px-4 py-2 ${
                year === yearOption ? "bg-blue-500 text-white" : "bg-white text-black"
              }`}
            >
              {yearOption}
            </button>
          ))}
        </div>
        <div style={{ overflowX: 'auto' }}>
          <ResponsiveContainer width={1000} height={300}>
            <BarChart data={PHData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={<CustomXAxisTick x={0} y={0} payload={{
                value: ""
              }} />} tickMargin={10} />
              <YAxis domain={[6, 8.5]} ticks={[6, 6.5, 7, 7.5, 8]} tickFormatter={(value) => value.toFixed(1)} />
              <Tooltip />
              <Bar
                dataKey="phLevel"
                fill="rgba(34, 197, 94, 0.8)"
                stroke="rgba(34, 197, 94, 1)"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PHSensor;