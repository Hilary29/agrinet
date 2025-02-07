"use client";
import React, { useState } from 'react';
import IntroText from '@/components/IntroText';
import ModalInvoice from "@/components/ModalInvoice";
import InfoInvoice from "@/components/InfoInvoice";
import { FaPlus, FaEdit, FaTrash, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import { invoiceList } from '@/public/data/datainvoices'; // Adjust the path as necessary

interface Invoice {
  id: string;
  date: string;
  customer: string;
  amount: number;
  status: "Paid" | "Pending" | "Cancelled";
  description: string;
}

const Page = () => {
  const [invoices, setInvoices] = useState<Invoice[]>(invoiceList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [currentInvoiceIndex, setCurrentInvoiceIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handleAddInvoice = (invoice: Invoice) => {
    if (currentInvoiceIndex !== null) {
      const updatedInvoices = [...invoices];
      updatedInvoices[currentInvoiceIndex] = invoice;
      setInvoices(updatedInvoices);
    } else {
      setInvoices((prevInvoices) => [...prevInvoices, invoice]);
    }
    resetModal();
  };

  const handleEditInvoice = (index: number) => {
    setCurrentInvoiceIndex(index);
    setIsModalOpen(true);
  };

  const handleDeleteInvoice = (index: number) => {
    setInvoices((prevInvoices) => prevInvoices.filter((_, i) => i !== index));
  };

  const handleViewInvoiceInfo = (index: number) => {
    setCurrentInvoiceIndex(index);
    setIsInfoModalOpen(true);
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setIsInfoModalOpen(false);
    setCurrentInvoiceIndex(null);
  };

  // Filter invoices based on search query across multiple fields
  const filteredInvoices = invoices.filter(invoice =>
    invoice.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.amount.toString().includes(searchQuery.toLowerCase()) ||
    invoice.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the current invoices to display based on the page number
  const currentInvoices = filteredInvoices.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  // Calculate total pages
  const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);

  return (
    <div className="p-4 md:p-6 bg-white-50">
      <IntroText
        title="Invoices"
        description="Manage your invoices, track payments, and view transaction details."
      />
      <main className="rounded-lg p-4 md:p-6 flex flex-col">
        {invoices.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <Image
              src="/images/No_invoices.png"
              alt="No Invoices"
              className="mb-4"
              width={300}
              height={300}
            />
            <p className="mt-4">No invoices created yet. Create your first invoice to start tracking payments.</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 bg-green-500 text-white-50 font-semibold py-2 px-4 rounded-lg hover:bg-green-400 transition"
            >
              + Create New Invoice
            </button>
          </div>
        ) : (
          <>
            <header className="w-full flex items-center mb-4 justify-between flex-wrap">
              <input
                type="text"
                placeholder="Search invoices"
                className="border-2 border-gray-500 rounded-lg p-2 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={() => setIsModalOpen(true)}
                className="ml-4 bg-primary-600 text-white-50 font-semibold py-2 px-4 rounded-lg hover:bg-primary-500 transition flex items-center"
              >
                <FaPlus className="mr-2" />
                Create New Invoice
              </button>
            </header>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse rounded-lg p-2 overflow-hidden">
                <thead>
                  <tr className="bg-green-100 text-green-700">
                    <th className="p-4 font-normal">#</th>
                    <th className="p-4 font-normal">Invoice Date</th>
                    <th className="p-4 font-normal">Customer</th>
                    <th className="p-4 font-normal">Amount (fcfa)</th>
                    <th className="p-4 font-normal">Status</th>
                    <th className="p-4 font-normal">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentInvoices.map((invoice, index) => (
                    <tr
                      key={index}
                      className="border-b border-green-200 hover:bg-gray-50 cursor-pointer"
                      onClick={() => handleViewInvoiceInfo(index)} // Make the row clickable
                    >
                      <td className="p-4 text-center">{index + 1 + currentPage * itemsPerPage}</td>
                      <td className="p-4 text-center">{invoice.date}</td>
                      <td className="p-4 text-center">{invoice.customer}</td>
                      <td className="p-4 text-center">{invoice.amount.toFixed(2)}</td>
                      <td className="p-4 text-center">
                        <div
                          className={`inline-flex items-center justify-center px-2 py-1 text-sm font-semibold rounded-full ${invoice.status === "Paid" ? "bg-green-100 text-green-600" : invoice.status === "Pending" ? "bg-yellow-100 text-yellow-600" : "bg-red-100 text-red-600"}`}
                        >
                          {invoice.status}
                        </div>
                      </td>
                      <td className="p-4 text-center flex justify-center space-x-2">
                        <FaEdit
                          className="cursor-pointer text-blue-600 hover:text-blue-800"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent row click
                            handleEditInvoice(index);
                          }}
                        />
                        <FaTrash
                          className="cursor-pointer text-red-600 hover:text-red-800"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent row click
                            handleDeleteInvoice(index);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                disabled={currentPage === 0}
                className={`flex items-center p-2 rounded-lg ${currentPage === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-400 transition'}`}
              >
                <FaArrowLeft className="mr-2" />
                Previous
              </button>
              <span>
                Page {currentPage + 1} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                disabled={currentPage >= totalPages - 1}
                className={`flex items-center p-2 rounded-lg ${currentPage >= totalPages - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-400 transition'}`}
              >
                Next
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </>
        )}

        <ModalInvoice
          isOpen={isModalOpen}
          onClose={resetModal}
          onAddInvoice={handleAddInvoice}
          currentInvoice={currentInvoiceIndex !== null ? invoices[currentInvoiceIndex] : undefined}
        />

        <InfoInvoice
          isOpen={isInfoModalOpen}
          onClose={resetModal}
          invoice={currentInvoiceIndex !== null ? invoices[currentInvoiceIndex] : undefined}
        />
      </main>
    </div>
  );
}

export default Page;