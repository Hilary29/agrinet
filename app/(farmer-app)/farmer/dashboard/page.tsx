"use client";

import React from 'react';
import IntroText from '@/components/IntroText';
import RevenueComparison from '@/components/ReveneueComparison';
import AlertTimeline from '@/components/Alerts';
import TransactionHistory from '@/components/Transactions';
import CropGraph from '@/components/Crops';
import LivestockGraph from '@/components/Livestock';
import IotSection from '@/components/Iotsection';

const Page = () => {
  const revenueData = [
    { date: '2023-01-01', currentRevenue: 2000, previousRevenue: 1500 },
    { date: '2023-02-01', currentRevenue: 2500, previousRevenue: 1800 },
    // Add more entries...
  ];  const alerts = [
    { date: '2025-01-01', message: 'Low soil moisture detected!' },
    { date: '2025-01-02', message: 'Pest detected in crop area.' },
  ];
  const transactions = [
    { date: '2025-01-01', amount: 200, description: 'Fertilizer Purchase' },
    { date: '2025-01-05', amount: 150, description: 'Seed Purchase' },
  ];
  
  const cropData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Crop Growth',
        data: [20, 30, 25, 40],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  const livestockData = {
    labels: ['Cows', 'Goats', 'Chickens'],
    datasets: [
      {
        label: 'Livestock Count',
        data: [10, 15, 50],
        backgroundColor: 'rgba(153,102,255,0.2)',
      },
    ],
  };

  const sensors = [
    { name: 'Soil Moisture', value: 30, unit: '%' },
    { name: 'Temperature', value: 20, unit: '°C' },
  ];

  return (
    <div className="p-4">
      <IntroText 
        title="Dashboard" 
        description="View your farm's performance at a glance, including device stats and AI insights." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-1">
          <RevenueComparison currentRevenue={revenueData.current} previousRevenue={revenueData.previous} />
        </div>
        <div className="col-span-1">
          <AlertTimeline alerts={alerts} />
        </div>
        <div className="col-span-1">
          <TransactionHistory transactions={transactions} />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <CropGraph data={cropData} />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <LivestockGraph data={livestockData} />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <IotSection sensors={sensors} />
        </div>
      </div>
    </div>
  );
}

export default Page;