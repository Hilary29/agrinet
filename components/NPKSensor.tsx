// components/NPKSensor.js
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const NPKSensor = () => {
  const data = [
    { month: "Jan", npkLevel: 10 },
    { month: "Feb", npkLevel: 15 },
    { month: "Mar", npkLevel: 20 },
    { month: "Apr", npkLevel: 25 },
    { month: "May", npkLevel: 30 },
    { month: "Jun", npkLevel: 35 },
    { month: "Jul", npkLevel: 40 },
    { month: "Aug", npkLevel: 38 },
    { month: "Sep", npkLevel: 32 },
    { month: "Oct", npkLevel: 28 },
    { month: "Nov", npkLevel: 22 },
    { month: "Dec", npkLevel: 15 },
  ];

  return (
    <div>
      <div className="bg-white shadow-6dp rounded-lg p-4">
        <h3 className="font-satoshi font-semibold text-heading-desktop-h6 mb-4">NPK Sensor</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 'dataMax + 5']} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="npkLevel"
              stroke="#8B4513" // Brown color
              fill="rgba(67, 199, 89, 0.2)"
              strokeWidth={2}
              dot={true}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default NPKSensor;