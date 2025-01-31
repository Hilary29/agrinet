import React from 'react';
import { Pie, PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  ChartOptions,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale); // Register RadialLinearScale

// Data for the crops polar area chart
const cropsData = {
  labels: ['Maize', 'Rice', 'Beans', 'Cassava'],
  datasets: [
    {
      data: [25, 35, 20, 20], // Example data for crops
      backgroundColor: [
        'rgba(67, 199, 89, 0.8)',
        'rgba(34, 150, 243, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(255, 99, 132, 0.8)',
      ],
    },
  ],
};

// Data for the livestock pie chart
const livestockData = {
  labels: ['Cattle', 'Poultry', 'Goats'],
  datasets: [
    {
      data: [50, 30, 20], // Example data for livestock
      backgroundColor: [
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
        'rgba(75, 192, 192, 0.8)',
      ],
    },
  ],
};

// Options for the polar area chart
const polarAreaOptions: ChartOptions<'polarArea'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

// Options for the pie chart
const pieOptions: ChartOptions<'pie'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const CropsAndLivestock: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <div className="flex-1 mb-4 max-w-xs">
          <h4 className="text-md font-satoshi mb-2">Crops Distribution</h4>
          <PolarArea data={cropsData} options={polarAreaOptions} />
        </div>
        <div className="flex-1 mb-4 max-w-xs">
          <h4 className="text-md font-satoshi mb-2">Livestock Distribution</h4>
          <Pie data={livestockData} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default CropsAndLivestock;