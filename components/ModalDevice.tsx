import { useState, useEffect } from "react";

// Define the Device interface
interface Device {
  name: string;
  type: string;
  support: string;
  typeMCU: string;
  description: string;
  unit: string; 
  status: "Active" | "Inactive";
}

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
  const [typeMCU, setTypeMCU] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<"Active" | "Inactive">("Active");
  const [unit, setUnit] = useState<string>(""); 

  // Populate form fields when editing
  useEffect(() => {
    if (currentDevice) {
      setDeviceName(currentDevice.name);
      setDeviceType(currentDevice.type);
      setSupport(currentDevice.support);
      setTypeMCU(currentDevice.typeMCU);
      setDescription(currentDevice.description);
      setStatus(currentDevice.status);
      setUnit(currentDevice.unit);
    } else {
      resetForm();
    }
  }, [currentDevice, isOpen]);

  const resetForm = () => {
    setDeviceName("");
    setDeviceType("");
    setSupport("");
    setTypeMCU("");
    setDescription("");
    setStatus("Active");
    setUnit("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newDevice: Device = {
      name: deviceName,
      type: deviceType,
      support,
      typeMCU,
      description,
      status,
      unit,
    };

    onAddDevice(newDevice);
    resetForm();
    onClose(); // Close the modal
  };

  const handleDeviceTypeChange = (type: string) => {
    setDeviceType(type);
    // Set unit based on device type
    switch (type) {
      case "Temperature sensor":
        setUnit("°C");
        break;
      case "Humidity sensor":
        setUnit("%");
        break;
      case "PH sensor":
        setUnit("pH");
        break;
      case "NPK sensor":
        setUnit("mg/L");
        break;
      default:
        setUnit("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-white-50">
      <div className="bg-white-50 rounded-lg p-6 shadow-lg max-w-lg w-full">
        <h3 className="font-satoshi font-semibold text-heading-desktop-h6 mb-4">
          {currentDevice ? "Edit Device" : "Add New Device"}
        </h3>
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
            <label className="block mb-2">Device Type</label>
            <select
              value={deviceType}
              onChange={(e) => handleDeviceTypeChange(e.target.value)}
              required
              className="border border-gray-300 rounded-lg p-2 w-full"
            >
              <option value="">Select Device Type</option>
              <option value="Temperature sensor">Temperature sensor</option>
              <option value="Humidity sensor">Humidity sensor</option>
              <option value="PH sensor">PH sensor</option>
              <option value="NPK sensor">NPK sensor</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Support</label>
            <input
              type="text"
              value={support}
              onChange={(e) => setSupport(e.target.value)}
              required
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Type of MCU</label>
            <input
              type="text"
              value={typeMCU}
              onChange={(e) => setTypeMCU(e.target.value)}
              required
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="border border-gray-300 rounded-lg p-2 w-full"
              rows={3}
              placeholder="Please provide a brief description of your device"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">S.I. Unit</label>
            <input
              type="text"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              required
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Enter the S.I. unit"
              readOnly // Make it read-only since it's determined by the device type
            />
          </div>
          <div className="mb-4">
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