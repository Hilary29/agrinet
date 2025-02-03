// components/HumiditySensor.js
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const HumiditySensor = () => {
  // Sample data for the graph with realistic humidity values (in %)
  const data = [
    { month: "Jan", humidity: 30 },
    { month: "Feb", humidity: 35 },
    { month: "Mar", humidity: 40 },
    { month: "Apr", humidity: 50 },
    { month: "May", humidity: 60 },
    { month: "Jun", humidity: 70 },
    { month: "Jul", humidity: 75 },
    { month: "Aug", humidity: 80 },
    { month: "Sep", humidity: 70 },
    { month: "Oct", humidity: 60 },
    { month: "Nov", humidity: 45 },
    { month: "Dec", humidity: 35 },
  ];

  return (
    <div>
      <div className="bg-white shadow-6dp rounded-lg p-4">
        <h3 className="font-satoshi font-semibold text-heading-desktop-h6 mb-4">Humidity Sensor</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 100]} /> {/* Humidity generally ranges from 0 to 100% */}
            <Tooltip />
            <Line
              type="monotone"
              dataKey="humidity"
              stroke="#00f" // Set stroke to blue
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

export default HumiditySensor;