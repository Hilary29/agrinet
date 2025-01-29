// components/PHSensor.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Register the necessary components for a bar chart
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const PHSensor = () => {
  // Sample data for the bar chart with realistic PH levels (typical range: 6.0 to 8.5)
  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "PH Levels",
        data: [6.5, 6.8, 7.0, 7.2, 7.5, 7.4, 7.1, 6.9, 6.7, 6.8, 7.0, 7.3], // Realistic data values
        borderColor: "hsl(var(--active-500))",
        backgroundColor: "rgba(67, 199, 89, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: "PH Levels Over the Year",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'PH Level'
        },
        ticks: {
          callback: (value: string | number) => {
            // Ensure value is a number before calling toFixed
            return typeof value === "number" ? value.toFixed(1) : value;
          },
        },
      },
    },
  };

  return (
    <div>
      <div className="bg-white shadow-6dp rounded-lg p-4">
        <h3 className="font-satoshi font-semibold text-heading-desktop-h6 mb-4">PH Sensor</h3>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default PHSensor;