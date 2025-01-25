// components/CropGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const CropGraph = ({ data }) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <h2 className="text-xl font-semibold">Crop Growth Over Time</h2>
      <Line data={data} />
    </div>
  );
};

export default CropGraph;