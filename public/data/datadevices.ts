// datadevices.ts
 type Device = {
    name: string;
    type: string;
    support: string;
    typeMCU: string;
    description: string;
    unit: string;
    status: "Active" | "Inactive";
  };


export const deviceList: Device[] = [
    {
      name: "Field Temperature Sensor 1",
      type: "Temperature sensor",
      support: "WiFi",
      typeMCU: "ESP32",
      description: "Measures temperature in the agricultural field.",
      unit: "°C",
      status: "Active",
    },
    {
      name: "Greenhouse Humidity Sensor",
      type: "Humidity sensor",
      support: "Bluetooth",
      typeMCU: "Arduino",
      description: "Monitors humidity levels in the greenhouse.",
      unit: "%",
      status: "Active",
    },
    {
      name: "Soil pH Sensor A",
      type: "PH sensor",
      support: "ZigBee",
      typeMCU: "Raspberry Pi",
      description: "Measures soil pH for optimal crop growth.",
      unit: "pH",
      status: "Inactive",
    },
    {
      name: "NPK Sensor 1",
      type: "NPK sensor",
      support: "LoRa",
      typeMCU: "ESP8266",
      description: "Analyzes NPK levels in the soil.",
      unit: "mg/L",
      status: "Active",
    },
    {
      name: "Field Temperature Sensor 2",
      type: "Temperature sensor",
      support: "WiFi",
      typeMCU: "ESP32",
      description: "Records temperature variations in the field.",
      unit: "°C",
      status: "Active",
    },
    {
      name: "Reservoir Humidity Sensor",
      type: "Humidity sensor",
      support: "Bluetooth",
      typeMCU: "Arduino",
      description: "Tracks humidity in the water reservoir.",
      unit: "%",
      status: "Inactive",
    },
    {
      name: "Soil pH Sensor B",
      type: "PH sensor",
      support: "ZigBee",
      typeMCU: "Raspberry Pi",
      description: "Used to measure pH levels in different soil types.",
      unit: "pH",
      status: "Active",
    },
    {
      name: "NPK Sensor 2",
      type: "NPK sensor",
      support: "LoRa",
      typeMCU: "ESP8266",
      description: "Evaluates nutrient levels in the soil.",
      unit: "mg/L",
      status: "Inactive",
    },
    {
      name: "Temperature Logger",
      type: "Temperature sensor",
      support: "WiFi",
      typeMCU: "ESP32",
      description: "Logs temperature data for analysis.",
      unit: "°C",
      status: "Active",
    },
    {
      name: "Greenhouse NPK Sensor",
      type: "NPK sensor",
      support: "Bluetooth",
      typeMCU: "Arduino",
      description: "Monitors nutrient levels in greenhouse soil.",
      unit: "mg/L",
      status: "Active",
    },
    {
      name: "Field Humidity Sensor 1",
      type: "Humidity sensor",
      support: "ZigBee",
      typeMCU: "Raspberry Pi",
      description: "Measures humidity in field conditions.",
      unit: "%",
      status: "Inactive",
    },
    {
      name: "Soil Moisture & pH Sensor",
      type: "PH sensor",
      support: "LoRa",
      typeMCU: "ESP8266",
      description: "Combines moisture and pH measurement.",
      unit: "pH",
      status: "Active",
    },
    {
      name: "Temperature Sensor 3",
      type: "Temperature sensor",
      support: "WiFi",
      typeMCU: "ESP32",
      description: "Monitors temperature in various conditions.",
      unit: "°C",
      status: "Active",
    },
    {
      name: "Field NPK Sensor 1",
      type: "NPK sensor",
      support: "Bluetooth",
      typeMCU: "Arduino",
      description: "Collects data on soil nutrients.",
      unit: "mg/L",
      status: "Active",
    },
  ];