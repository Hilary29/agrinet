import { useState } from "react";
import ModalDevice from "./ModalDevice"; 
import InfoModal from "./InfoDevice"; // Import the InfoModal
import { FaPlus } from "react-icons/fa"; 
import Image from 'next/image'; 

interface Device {
  name: string;
  type: string;
  support: string;
  typeMCU: string;
  description: string;
  unit: string; 
  status: "Active" | "Inactive";
}

export default function Devices() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [currentDeviceIndex, setCurrentDeviceIndex] = useState<number | null>(null);

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

  return (
    <main className="bg-white rounded-lg p-4 flex flex-col">
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
              className="border border-gray-300 rounded-lg p-2 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              onClick={() => setIsModalOpen(true)} 
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
              {devices.map((device, index) => (
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
                  <td className="p-2">{device.unit}</td> 
                  <td className="p-2 text-center">
                    <select
                      className="border border-gray-300 rounded-lg p-1"
                      onChange={(e) => {
                        const action = e.target.value;
                        if (action === "edit") {
                          handleEditDevice(index);
                        } else if (action === "delete") {
                          handleDeleteDevice(index);
                        } else if (action === "info") {
                          handleViewDeviceInfo(index);
                        }
                        e.target.value = ""; // Reset the dropdown after selection
                      }}
                    >
                      <option value="" disabled selected>Select action</option>
                      <option value="edit">Edit</option>
                      <option value="delete">Delete</option>
                      <option value="info">View Info</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
  );
}