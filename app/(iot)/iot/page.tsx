"use client";

import React from 'react';
import IntroText from '@/components/IntroText';

const Page: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <IntroText 
        title="Dashboard" 
        description="View your farm&apos;s performance at a glance, including device stats and AI insights." 
      />
      <div className="relative">
        {/* Outer Circle */}
        <div className="w-32 h-32 border-4 border-blue-400 rounded-full transition-colors duration-300 hover:border-green-500 hover:shadow-lg hover:shadow-green-500"></div>
        {/* Middle Circle */}
        <div className="w-24 h-24 border-4 border-blue-300 absolute top-0 left-0 rounded-full transition-colors duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-green-500"></div>
        {/* Inner Circle */}
        <div className="w-16 h-16 border-4 border-blue-200 absolute top-0 left-0 rounded-full transition-colors duration-300 hover:border-green-300 hover:shadow-lg hover:shadow-green-500"></div>
      </div>
    </div>
  );
}

export default Page;