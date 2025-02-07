"use client";
import React, { useState } from 'react';
import IoTGraphs from "@/components/IoTGraphs"; 
import { FaPlus } from "react-icons/fa";
import Image from 'next/image';
import { deviceList } from '@/public/data/datadevices'; 
import { useRouter } from 'next/navigation'; // Update import for App Router

interface Device {
  name: string;
  type: string;
  support: string;
  typeMCU: string;
  description: string;
  unit: string;
  status: "Active" | "Inactive";
}

const IoT: React.FC = () => {
  const router = useRouter();
  const [devices, setDevices] = useState<Device[]>(deviceList);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDevices = devices.filter(device =>
    device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.support.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.typeMCU.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.unit.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 bg-white-50 flex">
      <IoTGraphs />
      <main className="rounded-lg p-4 md:p-6 flex-1">
        <header className="w-full flex items-center mb-4 justify-between flex-wrap">
          <input
            type="text"
            placeholder="Search devices"
            className="border-2 border-gray-500 rounded-lg p-2 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDevices.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <Image
                src="/images/No_devices.png"
                alt="No Devices"
                className="mb-4"
                width={300}
                height={300}
              />
              <p className="mt-4">No devices connected yet.</p>
            </div>
          ) : (
            filteredDevices.slice(0, 8).map((device, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
                <h3 className="font-semibold text-lg">{device.name}</h3>
                <p><strong>Type:</strong> {device.type}</p>
                <p><strong>Status:</strong> {device.status}</p>
              </div>
            ))
          )}
        </div>

        {filteredDevices.length > 0 && (
          <div className="mt-4">
            <button
              onClick={() => router.push('/farmer/connected-devices')}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-400 transition"
            >
              View Connected Devices
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default IoT;