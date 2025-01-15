// components/Devices.js
"use client";

import { useState } from "react";
import Modal from "./ModalDevice"; // Adjust the import path if necessary

export default function Devices() {
  const [devices, setDevices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddDevice = (device: any) => {
    setDevices((prevDevices) => [...prevDevices, device]);
  };

  return (
    <main className="bg-white shadow-6dp rounded-lg p-4">
      <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold font-satoshi text-heading-desktop-h2 text-black-100 mb-4 sm:mb-5 md:mb-6">Device Overview</h2>
      <ul className="space-y-2">
        {devices.length === 0 ? (
          <li className="flex justify-between p-2 border-b border-gray-200">
            <span>No devices added.</span>
          </li>
        ) : (
          devices.map((device, index) => (
            <li key={index} className="flex justify-between p-2 border-b border-gray-200">
              <span>{device.name}</span>
              <span className={device.status === "Active" ? "text-positive-500" : "text-active-500"}>
                {device.status}
              </span>
            </li>
          ))
        )}
      </ul>
      <footer className="mt-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-600 transition"
        >
          Add New Device
        </button>
      </footer>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddDevice={handleAddDevice} />
    </main>
  );
}