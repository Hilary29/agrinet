"use client";
import React, { useState } from 'react';
import IntroText from '@/components/IntroText';
import ModalDevice from "@/components/ModalDevice";
import InfoModal from "@/components/InfoDevice";
import { FaPlus, FaEdit, FaTrash, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import { deviceList } from '@/public/data/datadevices'; // Adjust the path as necessary

interface Device {
  name: string;
  type: string;
  support: string;
  typeMCU: string;
  description: string;
  unit: string;
  status: "Active" | "Inactive";
}

const Page = () => {
  const [devices, setDevices] = useState<Device[]>(deviceList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [currentDeviceIndex, setCurrentDeviceIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handleAddDevice = (device: Device) => {
    if (currentDeviceIndex !== null) {
      const updatedDevices = [...devices];
      updatedDevices[currentDeviceIndex] = device;
      setDevices(updatedDevices);
    } else {
      setDevices((prevDevices) => [...prevDevices, device]);
    }
    resetModal();
  };

  const handleEditDevice = (index: number) => {
    setCurrentDeviceIndex(index);
    setIsModalOpen(true);
  };

  const handleDeleteDevice = (index: number) => {
    setDevices((prevDevices) => prevDevices.filter((_, i) => i !== index));
  };

  const handleViewDeviceInfo = (index: number) => {
    setCurrentDeviceIndex(index);
    setIsInfoModalOpen(true);
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setIsInfoModalOpen(false);
    setCurrentDeviceIndex(null);
  };

  // Filter devices based on search query across multiple fields
  const filteredDevices = devices.filter(device =>
    device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.support.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.typeMCU.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.unit.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the current devices to display based on the page number
  const currentDevices = filteredDevices.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  // Calculate total pages
  const totalPages = Math.ceil(filteredDevices.length / itemsPerPage);

  return (
    <div className="p-4 md:p-6 bg-white-50">
      <IntroText
        title="Connected Devices"
        description="Add, manage, or remove IoT devices to track your farm in real time."
      />
      <main className="rounded-lg p-4 md:p-6 flex flex-col">
        {devices.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <Image
              src="/images/No_devices.png"
              alt="No Devices"
              className="mb-4"
              width={300}
              height={300}
            />
            <p className="mt-4">No devices connected yet. Connect your first IoT device to start monitoring your farm in real time.</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 bg-green-500 text-white-50 font-semibold py-2 px-4 rounded-lg hover:bg-green-400 transition"
            >
              + Add New Device
            </button>
          </div>
        ) : (
          <>
            <header className="w-full flex items-center mb-4 justify-between flex-wrap">
              <input
                type="text"
                placeholder="Search devices"
                className="border-2 border-gray-500 rounded-lg p-2 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={() => setIsModalOpen(true)}
                className="ml-4 bg-primary-600 text-white-50 font-semibold py-2 px-4 rounded-lg hover:bg-primary-500 transition flex items-center"
              >
                <FaPlus className="mr-2" />
                Add New Device
              </button>
            </header>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse rounded-lg p-2 overflow-hidden">
                <thead>
                  <tr className="bg-green-100 text-green-700">
                    <th className="p-4 font-normal"></th>
                    <th className="p-4 font-normal">Device Name</th>
                    <th className="p-4 font-normal">Device Type</th>
                    <th className="p-4 font-normal">Support</th>
                    <th className="p-4 font-normal">Type of MCU</th>
                    <th className="p-4 font-normal">Status</th>
                    <th className="p-4 font-normal">S.I. Unit</th>
                    <th className="p-4 font-normal">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentDevices.map((device, index) => (
                    <tr
                      key={index}
                      className="border-b border-green-200 hover:bg-gray-50 cursor-pointer"
                      onClick={() => handleViewDeviceInfo(index)} // Make the row clickable
                    >
                      <td className="p-4 text-center">{index + 1 + currentPage * itemsPerPage}</td>
                      <td className="p-4 text-center">{device.name}</td>
                      <td className="p-4 text-center">{device.type}</td>
                      <td className="p-4 text-center">{device.support}</td>
                      <td className="p-4 text-center">{device.typeMCU}</td>
                      <td className="p-4 text-center">
                        <div
                          className={`inline-flex items-center justify-center px-2 py-1 text-sm font-semibold rounded-full ${device.status === "Active" ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-500"
                            }`}
                        >
                          {device.status}
                        </div>
                      </td>
                      <td className="p-4">{device.unit}</td>
                      <td className="p-4 text-center flex justify-center space-x-2">
                        <FaEdit
                          className="cursor-pointer text-blue-600 hover:text-blue-800"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent row click
                            handleEditDevice(index);
                          }}
                        />
                        <FaTrash
                          className="cursor-pointer text-red-600 hover:text-red-800"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent row click
                            handleDeleteDevice(index);
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

        <ModalDevice
          isOpen={isModalOpen}
          onClose={resetModal}
          onAddDevice={handleAddDevice}
          currentDevice={currentDeviceIndex !== null ? devices[currentDeviceIndex] : undefined}
        />

        <InfoModal
          isOpen={isInfoModalOpen}
          onClose={resetModal}
          device={currentDeviceIndex !== null ? devices[currentDeviceIndex] : undefined}
        />
      </main>
    </div>
  );
}

export default Page;