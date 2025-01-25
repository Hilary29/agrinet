// components/RevenueComparison.js
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

const RevenueComparison = ({ data }) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Months are 0-indexed

  const filteredData = data.filter((entry) => {
    const entryDate = new Date(entry.date);
    return (
      entryDate.getFullYear() === year &&
      entryDate.getMonth() + 1 === month
    );
  });

  const currentRevenue = filteredData.reduce((sum, entry) => sum + entry.currentRevenue, 0);
  const previousRevenue = filteredData.reduce((sum, entry) => sum + entry.previousRevenue, 0);
  const change = previousRevenue ? ((currentRevenue - previousRevenue) / previousRevenue) * 100 : 0;

  const chartData = {
    labels: filteredData.map(entry => entry.date),
    datasets: [
      {
        label: 'Current Revenue',
        data: filteredData.map(entry => entry.currentRevenue),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Previous Revenue',
        data: filteredData.map(entry => entry.previousRevenue),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <div className="border rounded-lg p-4 shadow">
      <h2 className="text-xl font-semibold">Revenue Comparison</h2>
      
      <div className="flex mb-4">
        <select 
          value={year} 
          onChange={(e) => setYear(Number(e.target.value))} 
          className="border rounded-lg p-2 mr-2"
        >
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
          {/* Add more years as needed */}
        </select>

        <select 
          value={month} 
          onChange={(e) => setMonth(Number(e.target.value))} 
          className="border rounded-lg p-2"
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i + 1}>
              {new Date(0, i).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
      </div>

      <p>Current Revenue: ${currentRevenue}</p>
      <p>Previous Revenue: ${previousRevenue}</p>
      <p className={change >= 0 ? 'text-green-500' : 'text-red-500'}>
        Change: {change.toFixed(2)}%
      </p>

      <div className="relative h-64"> {/* Set a fixed height for the chart */}
        <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default RevenueComparison;