"use client";

import React from 'react';
import IntroText from '@/components/IntroText';
import TopSection from '@/components/TopSection';
import RecentSales from '@/components/Dashboard/RecentSales';
import AIRecommendations from '@/components/Dashboard/AiRecommendations'; 
import RevenueChart from '@/components/Dashboard/RevenueChart';
import UserMetrics from '@/components/UserMetrics';
import ExpenseTracker from '@/components/ExpenseTracker';
const Page: React.FC = () => {
  return (
    <div className="">
      <IntroText 
        title="Dashboard" 
        description="" 
      />
      <div className='flex flex-col md:flex-row justify-between gap-8 '>
        <div className='w-full'>
        <UserMetrics/>
        </div>
      <ExpenseTracker/>

      </div>



{/*       <TopSection />
      <div className="bg-white-50 p-4 rounded-lg">
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <div className="flex-1">
            <RevenueChart />
          </div>
          <div className="flex-1">
            <RecentSales />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <AIRecommendations />
      </div> */}
    </div>
  );
};

export default Page;