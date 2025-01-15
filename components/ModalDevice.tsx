// components/Modal.js
"use client";

import { useState } from "react";

const ModalDevice = ({ isOpen, onClose, onAddDevice }) => {
  const [deviceName, setDeviceName] = useState("");
  const [status, setStatus] = useState("Active"); // Default status

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onAddDevice({ name: deviceName, status });
    setDeviceName("");
    setStatus("Active");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Add New Device</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Device Name</label>
            <input
              type="text"
              value={deviceName}
              onChange={(e) => setDeviceName(e.target.value)}
              required
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-600 transition"
            >
              Add Device
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalDevice;