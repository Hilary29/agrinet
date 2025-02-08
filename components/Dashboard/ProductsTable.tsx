"use client";

import React from "react";
import Image from "next/image";
import { products } from "@/public/data/products";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductsTable: React.FC = () => {
  // Sort products based on revenue
  const sortedProducts = products.sort((a, b) => (b.revenue || 0) - (a.revenue || 0));
  // Get the top 3 products
  const topProducts = sortedProducts.slice(0, 3);

  return (
    <div className="flex flex-row shadow-lg my-16 justify-center">
      {/* Vertical list of top 3 products */}
      <Card className="flex flex-col border-none pt-16">
        <CardHeader className="items-center pb-0">
          <CardTitle>Best Sellers</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <div className="space-y-4">
            {topProducts.map((product) => (
              <div key={product.id} className="flex items-center">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="mr-4 rounded"
                />
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Concentric circular progress bars for each product */}
      <Card className="flex flex-col border-none pt-16">
        <CardContent className="flex-1 pb-0">
          <div className="flex flex-col items-center relative" style={{ width: '200px', height: '200px' }}>
            {topProducts.map((product, index) => {
              const stockData = [
                { name: product.name, value: product.stockPercentage || 0 },
                { name: "Remaining", value: 100 - (product.stockPercentage || 0) },
              ];

              // Define colors for each product
              const colors = [
                ["#00bcd4", "#e0e0e0"], // Cyan for stock, light gray for remaining
                ["#ff4081", "#f5f5f5"], // Pink for stock, light gray for remaining
                ["#673ab7", "#d1c4e9"], // Purple for stock, light purple for remaining
              ];

              return (
                <div key={product.id} style={{ position: 'absolute', top: 0, left: 0 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Tooltip 
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-white border border-gray-300 p-2 rounded">
                                <p>{payload[0].name}: {payload[0].value}%</p>
                              </div>
                            );
                          }
                          return null;
                        }} 
                      />
                      <Pie
                        data={stockData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={20 + index * 10} // Adjust inner radius for each circle
                        outerRadius={30 + index * 10} // Adjust outer radius for each circle
                        label
                        paddingAngle={5}
                      >
                        {stockData.map((entry, idx) => (
                          <Cell key={`cell-${idx}`} fill={colors[index][idx]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsTable;