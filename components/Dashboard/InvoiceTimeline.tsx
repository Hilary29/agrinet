"use client";

import React from "react";
import { Invoice } from "@/public/data/datainvoices"; // Adjust the path to your types

interface InvoiceTimelineProps {
  invoices: Invoice[];
  onViewInvoiceInfo: (index: number) => void; // Expecting an index
}

const InvoiceTimeline: React.FC<InvoiceTimelineProps> = ({ invoices, onViewInvoiceInfo }) => {
  // Get the latest 4 invoices
  const latestInvoices = invoices.slice(-3);

  return (
    <div className="relative p-4">
      <div className="absolute left-1/2 w-1 bg-gray-300 h-full"></div>
      {latestInvoices.map((invoice, index) => (
        <div key={index} className="flex items-start mb-4 relative">
          <div className={`w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-2 ${invoice.status === "Paid" ? "bg-green-500" : invoice.status === "Pending" ? "bg-yellow-500" : "bg-red-500"}`}></div>
          <div className="ml-8 p-4 bg-white shadow-md rounded-lg w-64" onClick={() => onViewInvoiceInfo(index)}> {/* Pass index here */}
            <p className="font-semibold">{invoice.customer}</p>
            <p className="text-gray-600">{invoice.date}</p>
            <p className="font-medium">${invoice.amount.toFixed(2)}</p>
            <span className={`inline-flex items-center justify-center px-2 py-1 text-sm font-semibold rounded-full ${invoice.status === "Paid" ? "bg-green-100 text-green-600" : invoice.status === "Pending" ? "bg-yellow-100 text-yellow-600" : "bg-red-100 text-red-600"}`}>
              {invoice.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InvoiceTimeline;