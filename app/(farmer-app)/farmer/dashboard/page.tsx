"use client";

import React from 'react';
import IntroText from '@/components/IntroText';
import RevenueComparison from '@/components/RevenueComparison';
import AlertTimeline from '@/components/Alerts';
import TransactionHistory from '@/components/Transactions';
import CropGraph from '@/components/Crops';
import LivestockGraph from '@/components/Livestock';
import IotSection from '@/components/Iotsection';

const Page = () => {






  return (
    <div className="p-4">
      <IntroText 
        title="Dashboard" 
        description="View your farm's performance at a glance, including device stats and AI insights." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-1">
          <RevenueComparison />
        </div>
        <div className="col-span-1">
          <AlertTimeline />
        </div>
        <div className="col-span-1">
          <TransactionHistory transactions={[]}  />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <CropGraph />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <LivestockGraph  />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <IotSection sensors={[]} />
        </div>
      </div>
    </div>
  );
}

export default Page;