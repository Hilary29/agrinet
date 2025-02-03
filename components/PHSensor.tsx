// components/PHSensor.js
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const PHSensor = () => {
  // Sample data for the bar chart with realistic pH levels (typical range: 6.0 to 8.5)
  const data = [
    { month: "Jan", phLevel: 6.5 },
    { month: "Feb", phLevel: 6.8 },
    { month: "Mar", phLevel: 7.0 },
    { month: "Apr", phLevel: 7.2 },
    { month: "May", phLevel: 7.5 },
    { month: "Jun", phLevel: 7.4 },
    { month: "Jul", phLevel: 7.1 },
    { month: "Aug", phLevel: 6.9 },
    { month: "Sep", phLevel: 6.7 },
    { month: "Oct", phLevel: 6.8 },
    { month: "Nov", phLevel: 7.0 },
    { month: "Dec", phLevel: 7.3 },
  ];

  return (
    <div>
      <div className="bg-white shadow-6dp rounded-lg p-4">
        <h3 className="font-satoshi font-semibold text-heading-desktop-h6 mb-4">PH Sensor</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis
              domain={[6, 8.5]} // Set the domain for pH levels
              ticks={[6, 6.5, 7, 7.5, 8]} // Custom ticks for the y-axis
              tickFormatter={(value) => value.toFixed(1)} // Format ticks to one decimal point
            />
            <Tooltip />
            <Bar
              dataKey="phLevel"
              fill="rgba(34, 197, 94, 0.8)" // Equivalent to Tailwind's text-green-500
              background={{ fill: "rgba(67, 199, 89, 0.5)" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PHSensor;