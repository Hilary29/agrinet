import React, { useState } from "react";
import ProductsTable from "@/components/Dashboard/ProductsTable";
import InvoiceTimeline from "@/components/Dashboard/InvoiceTimeline"; // Import the InvoiceTimeline component
import { Invoice } from "@/public/data/datainvoices"; // Adjust the path to your types
import RevenueOverview from "../RevenueOverview";
import { invoiceList } from "@/public/data/datainvoices"; // Ensure you have access to the invoice data

const Market: React.FC = () => {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [invoices, setInvoices] = useState<Invoice[]>(invoiceList); // Initialize with your invoice data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const handleInvoiceClick = (index: number) => {
    setSelectedInvoice(invoices[index]); // Get invoice by index
    setIsInfoModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsInfoModalOpen(false);
    setSelectedInvoice(null);
  };

  return (
    <div className="flex h-full">
      <div className="flex-1 ">
        <RevenueOverview />
      </div>
      <div className="flex-1 ">
        <ProductsTable />
      </div>
      <div className="flex-1 ">
        <InvoiceTimeline
          invoices={invoices}
          onViewInvoiceInfo={handleInvoiceClick} // Pass the index
        />
      </div>
    </div>

  );
};

export default Market;