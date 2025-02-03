// components/TempSensor.js
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const TempSensor = () => {
  // Sample data for the graph with realistic temperature values (in °C)
  const data = [
    { month: "Jan", temperature: 5 },
    { month: "Feb", temperature: 7 },
    { month: "Mar", temperature: 10 },
    { month: "Apr", temperature: 15 },
    { month: "May", temperature: 20 },
    { month: "Jun", temperature: 25 },
    { month: "Jul", temperature: 30 },
    { month: "Aug", temperature: 29 },
    { month: "Sep", temperature: 24 },
    { month: "Oct", temperature: 18 },
    { month: "Nov", temperature: 12 },
    { month: "Dec", temperature: 7 },
  ];

  return (
    <div>
      <div className="bg-white shadow-6dp rounded-lg p-4">
        <h3 className="font-satoshi font-semibold text-heading-desktop-h6 mb-4">Temperature Sensor</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#ff0000" // Set stroke to red
              fill="rgba(67, 199, 89, 0.2)"
              strokeWidth={2}
              activeDot={{ r: 8 }}
              dot={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TempSensor;