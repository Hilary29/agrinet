"use client";

import React from 'react';
import IntroText from '@/components/IntroText';
// import Crop from '@/components/Dashboard/Crop';
import IoT from '@/components/Dashboard/IoT';
import Market from '@/components/Dashboard/Market';
import Fora from '@/components/Dashboard/Fora';
import Welcome from '@/components/Dashboard/Welcome';

const Page: React.FC = () => {
  return (
    <div className="p-4">
      <IntroText 
        title="Dashboard" 
        description="" 
      />
      <div className="bg-white-50 p-4 rounded-lg">
        {/* Welcome Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Crop</h2>
          <Welcome />
        </div>

        {/* IoT Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">IoT</h2>
          <IoT />
        </div>

        {/* Marketplace Section */}
        <div className="mb-6">
          {/* <h2 className="text-xl font-semibold">Marketplace</h2> */}
          <Market />
        </div>

        {/* Fora Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Fora</h2>
          <Fora />
        </div>
      </div>
    </div>
  );
};

export default Page;