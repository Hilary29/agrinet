"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, Label } from "recharts";
// Import the desired Lucide icon
import { Brain } from "lucide-react"; // Import the Brain icon from Lucide
import Image from 'next/image'; // Import Image from Next.js

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
        <div className="bg-green-100 text-white p-6 rounded-2xl flex-1 relative">
          <h2 className="text-3xl font-satoshi font-semibold">Welcome to your Agrinet Farmer Dashboard!</h2>
          <p className="text-xl mt-4 font-inter">Explore our tools and insights to enhance your agricultural practices.</p>
          <Image
            src="/images/logo.png" // Replace with your image path
            alt="Welcome Illustration"
            width={150} // Specify width
            height={150} // Specify height
            className="absolute bottom-2 right-2" // Adjust size as necessary
          />
        </div>

        {/* AI Recommendations Box */}
        <div className="bg-yellow-200 p-6 rounded-2xl flex-1 relative">
          <h2 className="text-3xl font-satoshi font-semibold">AI Recommendations</h2>
          <ul className="list-disc text-lg mt-4 font-inter pl-6 space-y-2">
            <li>Consider rotating your crops to improve soil health.</li>
            <li>Implement cover cropping to prevent erosion.</li>
            <li>Diversify livestock to enhance farm resilience.</li>
          </ul>
          <div className="absolute bottom-2 right-2 flex items-center">
            <Brain className="w-32 h-32 text-gray-800" /> {/* Use Lucide Brain icon */}
          </div>
        </div>

        {/* Livestock and Crop Rotation Chart */}
        <div className="bg-gray-100 p-6 rounded-2xl flex-1">
          <h3 className="text-3xl font-satoshi font-semibold">Livestock and Crop Rotation</h3>
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