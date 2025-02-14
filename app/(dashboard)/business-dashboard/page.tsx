import BusinessExpenseTracker from "@/components/BusinessExpenseTracker";
import IntroText from "@/components/IntroText";
import OrderTracking from "@/components/OrderTracking";
import PersonnelManagement from "@/components/PersonnelManagement";
import ProductManagement from "@/components/ProductManagement";
import PurchaseOverview from "@/components/PurchaseOverview";
import SalesMetrics from "@/components/SalesMetrics";
import TransactionHistory from "@/components/TransactionHistory";
import React from "react";
import { control_auth_component_roles } from "@/services/auth/auth_component_rules";

const page = () => {
  if (control_auth_component_roles("business_dashboard", "component")) {
    return (
      <div>
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

export default page;
