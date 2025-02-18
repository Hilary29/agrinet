"use client";
import BusinessExpenseTracker from "@/components/BusinessExpenseTracker";
import IntroText from "@/components/IntroText";
import OrderTracking from "@/components/OrderTracking";
import PersonnelManagement from "@/components/PersonnelManagement";
import ProductManagement from "@/components/ProductManagement";
import PurchaseOverview from "@/components/PurchaseOverview";
import SalesMetrics from "@/components/SalesMetrics";
import TransactionHistory from "@/components/TransactionHistory";
import React, { useEffect, useState } from "react";
import { control_auth_component_roles } from "@/services/auth/auth_component_rules";
import UserInfo from "@/components/user-info";
import RateApplication from "@/components/RateApplication";

//Modifier pour recuperer aussi l'image depuis la bd
const user = {
  imageUrl: "/images/avatar-dashboard.jpg",
  /*   name: "Ahmed Mousa",
  username: "Ahmed65", */
};

const Page = () => {
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

  if (control_auth_component_roles("business_dashboard", "component")) {
    return (
      <div>
        <div className="flex  justify-between ">
        <UserInfo
          imageUrl={user.imageUrl}
          name={name}
          username={username}
        />
        <RateApplication/>
        </div>
        <IntroText title="Business Dashboard" description={""} />
        <div>
          <div className="flex flex-col md:flex-row justify-between gap-8  ">
            <div className="w-full">
              <SalesMetrics />
              <TransactionHistory />
              <OrderTracking />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <PurchaseOverview />
                <ProductManagement />
              </div>
              <PersonnelManagement />
            </div>
            <BusinessExpenseTracker />
          </div>
        </div>
      </div>
    );
  }
};

export default Page;
