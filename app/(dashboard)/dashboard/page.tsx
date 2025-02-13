"use client";

import React from "react";
import IntroText from "@/components/IntroText";
import TopSection from "@/components/TopSection";
import RecentSales from "@/components/Dashboard/RecentSales";
import AIRecommendations from "@/components/Dashboard/AiRecommendations";
import RevenueChart from "@/components/Dashboard/RevenueChart";
import UserMetrics from "@/components/UserMetrics";
import ExpenseTracker from "@/components/ExpenseTracker";
import TransactionHistory2 from "@/components/TransactionHistory2";
import OrderTracking2 from "@/components/OrderTracking2";
import UserInfo from "@/components/user-info";

const user = {
  imageUrl: "/images/avatar-dashboard.jpg",
  name: "Ahmed Mousa",
  username: "Ahmed65",
};

const Page: React.FC = () => {
  return (
    <div className="">
      <UserInfo
        imageUrl={user.imageUrl}
        name={user.name}
        username={user.username}
      />
      <IntroText title="Dashboard" description="" />
      <div className="flex flex-col md:flex-row justify-between pt-16 md:pt-0 gap-8 ">
        <div className="w-full">
          <UserMetrics />
          <TransactionHistory2 />
          <OrderTracking2 />
        </div>
        <ExpenseTracker />
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
