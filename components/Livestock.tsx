// components/LivestockGraph.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const LivestockGraph = ({ data }) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <h2 className="text-xl font-semibold">Livestock Count</h2>
      <Bar data={data} />
    </div>
  );
};

export default LivestockGraph;