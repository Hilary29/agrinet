"use client";

import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import { Device } from '@/public/data/device'; // Adjust the import path accordingly

interface ModalDeviceProps {
  isOpen: boolean;
  onClose: () => void;
  onAddDevice: (device: Device) => void;
  currentDevice?: Device; // Optional prop for editing
}

const ModalDevice: React.FC<ModalDeviceProps> = ({ isOpen, onClose, onAddDevice, currentDevice }) => {
  const [deviceName, setDeviceName] = useState<string>("");
  const [deviceType, setDeviceType] = useState<string>("");
  const [support, setSupport] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<"Active" | "Inactive">("Active");

  // Static owner and category IDs
  const organisationId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  const categorieId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";

  // Populate form fields when editing
  useEffect(() => {
    if (currentDevice) {
      setDeviceName(currentDevice.deviceName);
      setDeviceType(currentDevice.type);
      setSupport(currentDevice.support);
      setDescription(currentDevice.description);
      setStatus(currentDevice.status);
    } else {
      resetForm();
    }
  }, [currentDevice, isOpen]);

  const resetForm = () => {
    setDeviceName("");
    setDeviceType("");
    setSupport("");
    setDescription("");
    setStatus("Active");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newDevice: Device = {
      deviceName,
      type: deviceType,
      support,
      status,
      description,
      organisationId,
      categorieId,
      deviceId: "",
      name: "",
      typeMCU: "",
      unit: "",
      api: "",
      temperatureData: [],
      phLevelData: [],
      npkLevelData: [],
      humidityData: []
    };

    try {
      // Send a POST request to the backend
      const response = await axios.post("http://192.168.1.173:8081/api/v1/iot/device/create", newDevice);
      console.log("Device added:", response.data);
      onAddDevice(newDevice); // Call the parent function to update the state
      
      // Save to local storage
      saveDeviceToLocalStorage(newDevice);
      
      resetForm();
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error adding device:", error);
      // Handle error appropriately, e.g., show an alert or notification
    }
  };

  const saveDeviceToLocalStorage = (device: Device) => {
    const existingDevices = JSON.parse(localStorage.getItem('devices') || '[]');
    existingDevices.push(device);
    localStorage.setItem('devices', JSON.stringify(existingDevices));
  };

  const handleDeviceTypeChange = (type: string) => {
    setDeviceType(type);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-100">
      <div className="bg-white-50 rounded-lg p-6 shadow-lg w-full max-w-3xl landscape-modal">
        <h3 className="font-satoshi font-semibold text-2xl mb-4">
          {currentDevice ? "Edit Device" : "Add New Device"}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Device Name Field */}
            <div className="mb-4">
              <label className="block mb-2">Device Name</label>
              <input
                type="text"
                value={deviceName}
                onChange={(e) => setDeviceName(e.target.value)}
                required
                placeholder="Enter device name"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>

            {/* Device Type Field */}
            <div className="mb-4">
              <label className="block mb-2">Device Type</label>
              <select
                value={deviceType}
                onChange={(e) => handleDeviceTypeChange(e.target.value)}
                required
                className="border border-gray-300 rounded-lg p-2 w-full"
              >
                <option value="">Select Device Type</option>
                <option value="ESP">ESP</option>
                <option value="Humidity sensor">Humidity sensor</option>
                <option value="NPK sensor">NPK sensor</option>
                <option value="PHSensor data">PHSensor data</option>
                <option value="TempSensor data">TempSensor data</option>
              </select>
            </div>

            {/* Support Field */}
            <div className="mb-4">
              <label className="block mb-2">Support</label>
              <input
                type="text"
                value={support}
                onChange={(e) => setSupport(e.target.value)}
                required
                placeholder="Enter support type"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>

            {/* Description Field */}
            <div className="mb-4 col-span-2">
              <label className="block mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="border border-gray-300 rounded-lg p-2 w-full"
                rows={3}
                placeholder="Provide a brief description of your device"
              />
            </div>

            {/* Status Field */}
            <div className="mb-4 col-span-2">
              <label className="block mb-2">Status</label>
              <div className="flex items-center">
                <label className="mr-4">
                  <input
                    type="radio"
                    value="Active"
                    checked={status === "Active"}
                    onChange={() => setStatus("Active")}
                    className="mr-1"
                  />
                  Active
                </label>
                <label>
                  <input
                    type="radio"
                    value="Inactive"
                    checked={status === "Inactive"}
                    onChange={() => setStatus("Inactive")}
                    className="mr-1"
                  />
                  Inactive
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
              className="bg-primary-500 text-white-50 font-semibold py-2 px-4 rounded-lg hover:bg-primary-600 transition"
            >
              {currentDevice ? "Update Device" : "Add Device"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalDevice;