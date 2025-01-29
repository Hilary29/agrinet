// components/TempSensor.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
} from "chart.js";

// Register the necessary components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const TempSensor = () => {
  // Sample data for the graph with realistic temperature values (in °C)
  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [5, 7, 10, 15, 20, 25, 30, 29, 24, 18, 12, 7], // Realistic temperature data
        borderColor: "hsl(var(--active-500))", // Using your Tailwind color
        backgroundColor: "rgba(67, 199, 89, 0.2)",
        fill: true,
        tension: 0.4,
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
        text: "Temperatures Over the Year",
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
        beginAtZero: false, // Allow for negative temperatures if needed
      },
    },
  };

  return (
    <div>
      <div className="bg-white shadow-6dp rounded-lg p-4">
        <h3 className="font-satoshi font-semibold text-heading-desktop-h6 mb-4">Temperature Sensor</h3>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TempSensor;