import { useState, useEffect } from "react";

// Define the Invoice interface
interface Invoice {
  id: string;
  date: string; // e.g., "2023-02-07"
  customer: string; // e.g., "John Doe"
  amount: number; // e.g., 150.75
  status: "Paid" | "Pending" | "Cancelled";
  description: string; // e.g., "Payment for services rendered."
}

interface ModalInvoiceProps {
  isOpen: boolean;
  onClose: () => void;
  onAddInvoice: (invoice: Invoice) => void;
  currentInvoice?: Invoice; // Optional prop for editing
}

const ModalInvoice: React.FC<ModalInvoiceProps> = ({ isOpen, onClose, onAddInvoice, currentInvoice }) => {
  const [invoiceId, setInvoiceId] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [customer, setCustomer] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [status, setStatus] = useState<"Paid" | "Pending" | "Cancelled">("Paid");
  const [description, setDescription] = useState<string>("");

  // Populate form fields when editing
  useEffect(() => {
    if (currentInvoice) {
      setInvoiceId(currentInvoice.id);
      setDate(currentInvoice.date);
      setCustomer(currentInvoice.customer);
      setAmount(currentInvoice.amount);
      setStatus(currentInvoice.status);
      setDescription(currentInvoice.description);
    } else {
      resetForm();
    }
  }, [currentInvoice, isOpen]);

  const resetForm = () => {
    setInvoiceId("");
    setDate("");
    setCustomer("");
    setAmount(0);
    setStatus("Paid");
    setDescription("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newInvoice: Invoice = {
      id: invoiceId || Math.random().toString(36).substr(2, 9), // Generate a random ID if not provided
      date,
      customer,
      amount,
      status,
      description,
    };

    onAddInvoice(newInvoice);
    resetForm();
    onClose(); // Close the modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-100">
      <div className="bg-white-50 rounded-lg p-6 shadow-lg w-full max-w-3xl landscape-modal">
        <h3 className="font-satoshi font-semibold text-2xl mb-4">
          {currentInvoice ? "Edit Invoice" : "Add New Invoice"}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block mb-2">Invoice ID</label>
              <input
                type="text"
                value={invoiceId}
                onChange={(e) => setInvoiceId(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 w-full"
                placeholder="Enter Invoice ID"
                readOnly={!!currentInvoice} // Make it read-only if editing
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Customer</label>
              <input
                type="text"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                required
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Amount ($)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                required
                className="border border-gray-300 rounded-lg p-2 w-full"
                min="0"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="border border-gray-300 rounded-lg p-2 w-full"
                rows={3}
                placeholder="Please provide a brief description of the invoice"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block mb-2">Status</label>
              <div className="flex items-center">
                <label className="mr-4">
                  <input
                    type="radio"
                    value="Paid"
                    checked={status === "Paid"}
                    onChange={() => setStatus("Paid")}
                    className="mr-1"
                  />
                  Paid
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    value="Pending"
                    checked={status === "Pending"}
                    onChange={() => setStatus("Pending")}
                    className="mr-1"
                  />
                  Pending
                </label>
                <label>
                  <input
                    type="radio"
                    value="Cancelled"
                    checked={status === "Cancelled"}
                    onChange={() => setStatus("Cancelled")}
                    className="mr-1"
                  />
                  Cancelled
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-white-50 text-black-50 border-2 border-gray-500 font-inter font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 transition mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-500 text-white-50 font-semibold py-2 px-4 rounded-lg hover:bg-primary-600 transition"
            >
              {currentInvoice ? "Update Invoice" : "Add Invoice"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalInvoice;