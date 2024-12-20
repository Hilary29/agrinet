"use client";

import * as React from "react";

export default function Devices() {
  return (
    <main className="bg-background text-foreground p-6 md:p-12">
      <section className="bg-white shadow-6dp rounded-lg p-4">
        <h2 className="text-heading-desktop-h2 font-semibold mb-4">Device Overview</h2>
        <ul className="space-y-2">
          <li className="flex justify-between p-2 border-b border-gray-200">
            <span>Soil Moisture Sensor</span>
            <span className="text-positive-500">Active</span>
          </li>
          <li className="flex justify-between p-2 border-b border-gray-200">
            <span>Soil Moisture Sensor</span>
            <span className="text-positive-500">Active</span>
          </li>
          <li className="flex justify-between p-2 border-b border-gray-200">
            <span>Weather Station</span>
            <span className="text-positive-500">Active</span>
          </li>
          <li className="flex justify-between p-2 border-b border-gray-200">
            <span>Crop Health Monitor</span>
            <span className="text-active-500">Inactive</span>
          </li>
          <li className="flex justify-between p-2 border-b border-gray-200">
            <span>Weather Station</span>
            <span className="text-positive-500">Active</span>
          </li>
          <li className="flex justify-between p-2 border-b border-gray-200">
            <span>Crop Health Monitor</span>
            <span className="text-active-500">Inactive</span>
          </li>
        </ul>
      </section>
      <footer className="mt-6">
        <button className="bg-primary-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-600 transition">
          Add New Device
        </button>
      </footer>
    </main>
  );
}