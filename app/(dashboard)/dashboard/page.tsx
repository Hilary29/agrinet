"use client";

import React, { useEffect, useState } from "react";
import IntroText from "@/components/IntroText";
import UserMetrics from "@/components/UserMetrics";
import ExpenseTracker from "@/components/ExpenseTracker";
import TransactionHistory2 from "@/components/TransactionHistory2";
import OrderTracking2 from "@/components/OrderTracking2";
import UserInfo from "@/components/user-info";
import { control_auth_component_roles } from "@/services/auth/auth_component_rules";


//Modifier pour recuperer aussi l'image depuis la bd
const user = {
  imageUrl: "/images/avatar-dashboard.jpg",
  /*   name: "Ahmed Mousa",
    username: "Ahmed65", */
};

const Page: React.FC = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("decodedToken");

    if (token) {
      const decoded = JSON.parse(token);
      setName(decoded.name);
      setUsername(decoded.username);
      setEmail(decoded.email);
    }
  }, []);


  if (control_auth_component_roles("dashboard", "component")) {
    return (
      <div className="">
        <UserInfo
          imageUrl={user.imageUrl}
          name={name}
          username={username}
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
  }
};

export default Page;