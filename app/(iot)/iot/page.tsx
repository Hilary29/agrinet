"use client";

import NPKSensor from "@/components/NPKSensor";  // Placeholder for PK Sensor graph
import PHSensor from "@/components/PHSensor";    // Placeholder for P Sensor graph
import TempSensor from "@/components/TempSensor"; // Placeholder for Temperature Sensor graph
import Devices from "@/components/Devices";     // Placeholder for devices section
import * as React from "react";

export default function Iot() {
  return (
    <main className="p-6 md:p-12 bg-background text-foreground">
      <h1 className="text-heading-desktop-h1 font-bold mb-8 text-center">Farm Monitoring Dashboard</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Devices />
          <NPKSensor />
          <PHSensor />
          <TempSensor />
      </section>
    </main>
  );
}