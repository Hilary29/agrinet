"use client";

import React from 'react';
import IntroText from '@/components/IntroText';
import TopSection from '@/components/TopSection';
import RevenueChart from '@/components/Dashboard/RevenueChart';
import RecentSales from '@/components/Dashboard/RecentSales';
import CropsAndLivestock from '@/components/CropAndLivestock'; 
import AIRecommendations from '@/components/Dashboard/AiRecommendations'; 

const Page: React.FC = () => {
  return (
    <div className="p-4">
      <IntroText 
        title="Dashboard" 
        description="" 
      />
      <TopSection />
      <div className="bg-white-50 shadow-lg p-4 rounded-lg">
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <div className="flex-1">
            <RevenueChart />
          </div>
          <div className="flex-1">
            <RecentSales />
          </div>
        </div>
      </div>

      {/* New Sections */}
      <div className="mt-6">
        <CropsAndLivestock />
      </div>

      <div className="mt-6">
        <AIRecommendations />
      </div>
    </div>
  );
};

export default Page;