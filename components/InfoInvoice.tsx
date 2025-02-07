import React from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon

interface Invoice {
  id: string;
  date: string;
  customer: string;
  amount: number;
  status: "Paid" | "Pending" | "Cancelled";
  description: string;
}

interface InfoInvoiceProps {
  isOpen: boolean;
  onClose: () => void;
  invoice: Invoice | undefined;
}

const InfoInvoice: React.FC<InfoInvoiceProps> = ({ isOpen, onClose, invoice }) => {
  if (!isOpen || !invoice) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black-50 bg-opacity-50">
      <div className="bg-white-50 rounded-lg p-6 shadow-lg max-w-5xl w-full relative">
        <FaTimes className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-gray-800" onClick={onClose} size={24} />
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 p-4 border-r border-green-200">
            <h2 className="text-xl md:text-2xl font-satoshi font-bold">Invoice ID: {invoice.id}</h2>
            <p className="mt-2 text-base md:text-lg font-inter"><strong>Date:</strong> {invoice.date}</p>
            <p className="mt-2 text-base md:text-lg font-inter"><strong>Customer:</strong> {invoice.customer}</p>
            <p className="mt-2 text-base md:text-lg font-inter"><strong>Amount:</strong> {invoice.amount.toFixed(2)}</p>
            <p className="mt-2 text-base md:text-lg font-inter"><strong>Status:</strong> {invoice.status}</p>
            <p className="mt-2 text-base md:text-lg font-inter"><strong>Description:</strong> {invoice.description}</p>
          </div>
          <div className="md:w-3/4 p-4 flex flex-col">
            <div className="flex-grow overflow-hidden">
              {/* Here you can add any additional content related to the invoice if needed */}
              <div className="h-full w-full">
                {/* Placeholder for any graphs or additional visuals related to the invoice */}
                <div className="text-center text-gray-500">Invoice details are displayed here.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoInvoice;