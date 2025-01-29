"use client";

import { useState } from "react";
import ModalDevice from "./ModalDevice"; // Ensure the import path is correct
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa"; // Importing icons

interface Device {
  name: string;
  type: string;
  support: string;
  typeMCU: string;
  unit: string; 
  status: "Active" | "Inactive";
}

export default function Devices() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddDevice = (device: Device) => {
    setDevices((prevDevices) => [...prevDevices, device]);
  };

  const handleEditDevice = (index: number) => {
    // Logic for editing a device can be implemented here
    console.log("Edit device at index:", index);
  };

  const handleDeleteDevice = (index: number) => {
    setDevices((prevDevices) => prevDevices.filter((_, i) => i !== index));
  };

  return (
    <main className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
      <header className="w-full font-satoshi flex items-center mb-4 justify-between flex-wrap">
        <input
          type="text"
          placeholder="Search devices"
          className="border border-gray-300 rounded-lg p-2 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <button
          onClick={() => setIsModalOpen(true)} // Open modal on click
          className="ml-4 bg-primary-600 text-primary-foreground font-semibold py-2 px-4 rounded-lg hover:bg-primary-500 transition flex items-center"
        >
          <FaPlus className="mr-2" />
          Add New Device
        </button>
      </header>

      <table className="min-w-full border-collapse rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-gray-800">
            <th className="p-2"></th>
            <th className="p-2">Device Name</th>
            <th className="p-2">Device Type</th>
            <th className="p-2">Support</th>
            <th className="p-2">Type of MCU</th>
            <th className="p-2">Status</th>
            <th className="p-2">S.I. Unit</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {devices.length === 0 ? (
            <tr>
              <td colSpan={8} className="text-center p-2"> {/* Updated colSpan to 8 */}
                No devices added.
              </td>
            </tr>
          ) : (
            devices.map((device, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-2 text-center">{index + 1}</td>
                <td className="p-2">{device.name}</td>
                <td className="p-2">{device.type}</td>
                <td className="p-2">{device.support}</td>
                <td className="p-2">{device.typeMCU}</td>
                <td className="p-2 text-center">
                  <div
                    className={`inline-flex items-center justify-center px-2 py-1 text-sm font-semibold rounded-full ${
                      device.status === "Active" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {device.status}
                  </div>
                </td>
                <td className="p-2">{device.unit}</td> {/* Displaying S.I. unit */}
                <td className="p-2 text-center">
                  <div className="flex justify-center items-center">
                    <FaEdit
                      className="text-blue-500 cursor-pointer hover:text-blue-700 mr-2"
                      onClick={() => handleEditDevice(index)}
                    />
                    <FaTrash
                      className="text-red-500 cursor-pointer hover:text-red-700"
                      onClick={() => handleDeleteDevice(index)}
                    />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <ModalDevice
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddDevice={handleAddDevice}
      />
    </main>
  );
}