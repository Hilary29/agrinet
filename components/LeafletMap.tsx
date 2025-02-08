// LeafletMap.tsx

"use client";

import { useEffect, useState } from "react";
import L, { Map as LeafletMap, LatLngExpression, LeafletMouseEvent } from "leaflet";
import "leaflet/dist/leaflet.css";
import { deviceList } from "@/public/data/datadevices"; // Import the device list

const LeafletMap: React.FC = () => {
  const [map, setMap] = useState<LeafletMap | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize the map
      const mapInstance = L.map("map").setView([3.848, 11.502], 13); // Centered on the National Advanced School of Engineering

      // Add tile layers
      const osmLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      });

      osmLayer.addTo(mapInstance);

      // Add markers for devices
      deviceList.forEach(device => {
        if (device.coordinates) {
          L.marker([device.coordinates.lat, device.coordinates.lon] as LatLngExpression)
            .addTo(mapInstance)
            .bindPopup(`<strong>${device.name}</strong><br/>${device.description}`);
        }
      });

      // Add click event to show coordinates
      mapInstance.on("click", (e: LeafletMouseEvent) => {
        L.popup().setLatLng(e.latlng).setContent(`You clicked the map at ${e.latlng.toString()}`).openOn(mapInstance);
      });

      setMap(mapInstance);

      // Cleanup function
      return () => {
        mapInstance.remove();
      };
    }
  }, []);

  return (
    <div className="rounded-5xl">

    <div className="p-4 max-w-4xl rounded-3xl border-2 border-gray-300 mx-auto">
      <h1 className="text-3xl font-satoshi font-semibold mb-4">Interactive Leaflet Map</h1>
      <div id="map" style={{ height: "500px", width: "800px" }}></div>
      </div>
      </div>
    );
};

export default LeafletMap;