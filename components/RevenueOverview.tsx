"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const RevenueOverview: React.FC = () => {
  const monthlyRevenue = [
    { month: "Jan", revenue: 1200 },
    { month: "Feb", revenue: 1500 },
    { month: "Mar", revenue: 1800 },
    { month: "Apr", revenue: 2000 },
    { month: "May", revenue: 1700 },
    { month: "Jun", revenue: 2200 },
    { month: "Jul", revenue: 2500 },
    { month: "Aug", revenue: 2300 },
    { month: "Sep", revenue: 2100 },
    { month: "Oct", revenue: 2400 },
    { month: "Nov", revenue: 2600 },
    { month: "Dec", revenue: 2800 },
  ];

  const totalExpenditure = 15000; // Example expenditure
  const totalSales = 30000; // Example sales

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-lg font-semibold mb-4">Weekly Stats</h2>
      <p className="text-gray-500 mb-4">Overview of Profit</p>
      <div className="h-48 mb-4">
        <ResponsiveContainer>
          <BarChart data={monthlyRevenue}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between">
        {/* Sales Box */}
        <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-4 rounded-lg text-center flex-1 mx-2 shadow-md transform transition-transform duration-300 hover:scale-105">
          <h3 className="font-medium">Sales</h3>
          <p className="text-lg font-semibold">${totalSales}</p>
        </div>
        
        {/* Expenses Box */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-lg text-center flex-1 mx-2 shadow-md transform transition-transform duration-300 hover:scale-105">
          <h3 className="font-medium">Expenses</h3>
          <p className="text-lg font-semibold">${totalExpenditure}</p>
        </div>
      </div>
    </div>
  );
};

export default RevenueOverview;