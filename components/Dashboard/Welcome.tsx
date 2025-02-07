"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, Label } from "recharts";

// Dummy data for crops and livestock
const cropData = [
  { name: "Wheat", value: 300 },
  { name: "Corn", value: 200 },
  { name: "Soybeans", value: 100 },
  { name: "Rice", value: 400 },
];

const livestockData = [
  { name: "Cattle", value: 250 },
  { name: "Sheep", value: 150 },
  { name: "Pigs", value: 100 },
  { name: "Goats", value: 200 },
];

// Define colors for the pie chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex space-x-4">
        {/* Welcome Box */}
        <div className="bg-green-500 text-white p-6 rounded-md flex-1">
          <h2 className="text-xl font-semibold">Welcome to the Farm Dashboard!</h2>
          <p>Explore our tools and insights to enhance your agricultural practices.</p>
        </div>

        {/* AI Recommendations Box */}
        <div className="bg-yellow-400 p-6 rounded-md flex-1">
          <h2 className="text-lg font-semibold">AI Recommendations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Consider rotating your crops to improve soil health.</li>
            <li>Implement cover cropping to prevent erosion.</li>
            <li>Diversify livestock to enhance farm resilience.</li>
          </ul>
        </div>

        {/* Livestock and Crop Rotation Chart */}
        <div className="bg-gray-500 p-6 rounded-md flex-1">
          <h3 className="text-white text-center mb-4">Livestock and Crop Rotation</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Tooltip />
              <Legend />
              {/* Outer Circle for Crops */}
              <Pie
                data={cropData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
              >
                {cropData.map((entry, index) => (
                  <Cell key={`crop-cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              {/* Inner Circle for Livestock */}
              <Pie
                data={livestockData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                dataKey="value"
                nameKey="name"
              >
                {livestockData.map((entry, index) => (
                  <Cell key={`livestock-cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Label value="Crops" position="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Welcome;