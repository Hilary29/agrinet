// device.ts

export interface Device {
  api: string;
  temperatureData: number[]; // Adjusted to be an array of numbers
  phLevelData: number[]; // Adjusted to be an array of numbers
  npkLevelData: number[]; // Adjusted to be an array of numbers
  humidityData: number[]; // Adjusted to be an array of numbers
  deviceId: string;
  organisationId: string;
  deviceName: string; // Changed to string from any for consistency
  name: string; // Can be used for display purposes
  type: string;
  support: string;
  typeMCU: string;
  description: string;
  unit: string;
  status: "Active" | "Inactive";
  categorieId: string; // Add categoryId
  coordinates?: { lat: number; lon: number }; // Optional coordinates for map integration
}