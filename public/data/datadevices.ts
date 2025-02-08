// datadevices.ts

import { Device } from "./device";

export const deviceList: Device[] = [
  {
    name: "Field Temperature Sensor 1",
    type: "Temperature sensor",
    support: "WiFi",
    typeMCU: "ESP32",
    description: "Measures temperature in the agricultural field.",
    unit: "°C",
    status: "Active",
    coordinates: { lat: 3.848, lon: 11.502 }, // Example coordinates
  },
  {
    name: "Greenhouse Humidity Sensor",
    type: "Humidity sensor",
    support: "Bluetooth",
    typeMCU: "Arduino",
    description: "Monitors humidity levels in the greenhouse.",
    unit: "%",
    status: "Active",
    coordinates: { lat: 3.848, lon: 11.502 },
  },
  {
    name: "Soil pH Sensor A",
    type: "PH sensor",
    support: "ZigBee",
    typeMCU: "Raspberry Pi",
    description: "Measures soil pH for optimal crop growth.",
    unit: "pH",
    status: "Inactive",
    coordinates: { lat: 3.000, lon: 10.23 },
  },
  {
    name: "NPK Sensor 1",
    type: "NPK sensor",
    support: "LoRa",
    typeMCU: "ESP8266",
    description: "Analyzes NPK levels in the soil.",
    unit: "mg/L",
    status: "Active",
    coordinates: { lat: 3.8554, lon: 11.441 },
  },
  // Continue adding coordinates for other devices...
  {
    name: "Temperature Logger",
    type: "Temperature sensor",
    support: "WiFi",
    typeMCU: "ESP32",
    description: "Logs temperature data for analysis.",
    unit: "°C",
    status: "Active",
    coordinates: { lat: 3.848, lon: 11.502 },
  },
  {
    name: "Temperature ",
    type: "Temperature sensor",
    support: "WiFi",
    typeMCU: "ESP32",
    description: "Logs temperature data for analysis.",
    unit: "°C",
    status: "Active",
    coordinates: { lat: 3.684, lon: 11.502 },
  },
  // Add remaining devices with coordinates
];