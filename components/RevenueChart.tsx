// RevenueChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartOptions,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const generateRandomData = (length: number) => 
  Array.from({ length }, () => Math.floor(Math.random() * 5000) + 1000);

const RevenueChart: React.FC = () => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Revenue',
        data: generateRandomData(12),
        backgroundColor: 'rgba(34, 197, 94, 0.8)', // Equivalent to Tailwind's text-green-500
        borderColor: 'rgba(34, 197, 94, 1)', // Equivalent to Tailwind's text-green-500
        borderWidth: 1,
        barThickness: 30,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: true, labels: { color: '#888888' } },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#888888' },
      },
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(0, 0, 0, 0.1)' },
        ticks: {
          color: '#888888',
          callback: (value) => `FCFA ${value}`, // Added FCFA prefix
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800">
      <h2 className="text-lg font-satoshi text-secondary-600 mb-4 text-center">Revenue Overview</h2>
      <div className="w-full h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueChart;