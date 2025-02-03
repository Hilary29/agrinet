// RevenueChart.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const generateRandomData = (length: number) => 
  Array.from({ length }, (_, index) => ({
    month: labels[index],
    revenue: Math.floor(Math.random() * 5000) + 1000,
  }));

const RevenueChart: React.FC = () => {
  const data = generateRandomData(12);

  return (
    <div className="p-4 bg-white shadow-lg font-semibold rounded-lg border border-gray-200 dark:bg-gray-800">
      <h2 className="text-lg font-satoshi text-secondary-600 mb-4 text-center">Revenue Overview</h2>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fill: '#888888' }} />
          <YAxis
            tick={{ fill: '#888888' }}
            domain={[0, 'dataMax + 1000']}
            tickFormatter={(value) => `FCFA ${value}`} // Added FCFA prefix
          />
          <Tooltip formatter={(value) => [`FCFA ${value}`, 'Revenue']} />
          <Bar
            dataKey="revenue"
            fill="rgba(34, 197, 94, 0.8)" // Equivalent to Tailwind's text-green-500
            stroke="rgba(34, 197, 94, 1)" // Equivalent to Tailwind's text-green-500
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;