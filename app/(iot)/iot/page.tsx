"use client";

import React from 'react';
import IntroText from '@/components/IntroText';


const Page = () => {
  return (
    <div className="p-4"> {/* Added padding for better spacing around the content */}
      <IntroText 
        title="Dashboard" 
        description="View your farm&apos;s performance at a glance, including device stats and AI insights." 
      />

    </div>
  );
}

export default Page;