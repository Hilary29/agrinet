// components/AlertTimeline.js
import React from 'react';

const AlertTimeline = ({ alerts }) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <h2 className="text-xl font-semibold">Alert Timeline</h2>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index} className="mb-2">
            <strong>{alert.date}</strong>: {alert.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertTimeline;