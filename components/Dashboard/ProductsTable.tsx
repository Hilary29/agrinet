"use client";

import React from "react";
import Image from "next/image";
import { products, Product } from "@/public/data/products";

const ProductsTable: React.FC = () => {
  // Sort products based on revenue
  const sortedProducts = products.sort((a, b) => b.revenue - a.revenue);
  // Get the top 4 products
  const topProducts = sortedProducts.slice(0, 4);

  return (
    <div className="flex-1 border-r border-gray-300 p-2 flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Products Overview</h2>
      <table className="min-w-full mt-6 border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4">Product Details</th>
            <th className="p-4">Available Stock (%)</th>
            <th className="p-4">Revenue by Product</th>
          </tr>
        </thead>
        <tbody>
          {topProducts.map((product) => (
            <tr key={product.id} className="border-b border-gray-200">
              <td className="p-4 flex items-center">
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
              </td>
              <td className="p-4">{product.stockPercentage}%</td>
              <td className="p-4">${product.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;