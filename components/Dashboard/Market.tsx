"use client";

import React, { useState } from "react";
import ProductsTable from "@/components/Dashboard/ProductsTable";
import InvoiceTimeline from "@/components/Dashboard/InvoiceTimeline"; // Import the InvoiceTimeline component
import InvoiceModal from "@/components/ModalInvoice";
import InfoInvoice from "@/components/InfoInvoice"; // Import the InfoInvoice component
import { Invoice } from "@/public/data/datainvoices"; // Adjust the path to your types
import RevenueOverview from "../RevenueOverview";
import { invoiceList } from "@/public/data/datainvoices"; // Ensure you have access to the invoice data

const Market: React.FC = () => {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [invoices, setInvoices] = useState<Invoice[]>(invoiceList); // Initialize with your invoice data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const handleInvoiceClick = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setIsInfoModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsInfoModalOpen(false);
    setSelectedInvoice(null);
  };

  return (
    <div className="flex h-full">
      <RevenueOverview />
      <ProductsTable />
        <InvoiceTimeline 
          invoices={invoices}
          onViewInvoiceInfo={handleInvoiceClick}
        />
      </div>
  );
};

export default Market;