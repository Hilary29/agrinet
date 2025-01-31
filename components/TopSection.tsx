import React from 'react';

const StatBox: React.FC<{ title: string; value: string; change?: string; currency?: boolean }> = ({ title, value, change, currency }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
      <h2 className="text-sm text-gray-500">{title}</h2>
      <p className="text-3xl font-semibold">
        {currency ? (title === "Total Revenue" ? 'Fcfa ' : '+') : ''}
        {value}
      </p>
      {change && <p className="text-sm text-gray-400">{change}</p>}
    </div>
  );
};

const TopSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 font-satoshi md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <StatBox title="Total Revenue" value="45,231.89" change="+15% from last month" currency />
      <StatBox title="Subscriptions" value="280% " change="+45% from last month" currency />
      <StatBox title="Sales" value="12,234" change="+6% from last month" currency />
      <StatBox title="Active Now" value="53" change="+12% from last month" currency />
    </div>
  );
};

export default TopSection;