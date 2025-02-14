import IntroText from "@/components/IntroText";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductAllocation from "@/components/product-allocation"
import ResourcePlanning from "@/components/resource-planning"
import StockManagement from "@/components/stock-management"
import { control_auth_component_roles } from "@/services/auth/auth_component_rules";

const page = () => {
  if (control_auth_component_roles("business", "component")) {
    return (
      <div>
        <IntroText
          title="Business"
          description="Manage Agencies, Staff, and Products"
        />
        <div className="container mx-auto py-6 space-y-6">
          <Tabs defaultValue="products" className="space-y-4">
            <TabsList>
              <TabsTrigger value="products">Product Allocation</TabsTrigger>
              <TabsTrigger value="resources">Planning Resources</TabsTrigger>
              <TabsTrigger value="stock">Inventory Management</TabsTrigger>
            </TabsList>
            <TabsContent value="products" className="space-y-4">
              <ProductAllocation />
            </TabsContent>
            <TabsContent value="resources" className="space-y-4">
              <ResourcePlanning />
            </TabsContent>
            <TabsContent value="stock" className="space-y-4">
              <StockManagement />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }
};

export default page;
