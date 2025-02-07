// components/NPKSensor.tsx
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { NPKData } from "@/public/data/iotdatagenrator";

const NPKSensor: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 3 }, (_, index) => currentYear - index);
  const [year, setYear] = useState(currentYear);
  const [trimonth, setTrimonth] = useState(0); // 0: Jan-Mar, 1: Apr-Jun, 2: Jul-Sep, 3: Oct-Dec

  const handleYearChange = (selectedYear: number) => {
    setYear(selectedYear);
  };

  const handleTrimonthChange = (selectedTrimonth: number) => {
    setTrimonth(selectedTrimonth);
  };

  // Filter data based on year and trimonth
  const filterData = (data: any[]) => {
    const startMonth = trimonth * 3; // Start month based on trimonth
    const endMonth = startMonth + 3; // End month

    return data.filter((entry: { date: string | number | Date; }) => {
      const entryDate = new Date(entry.date);
      return entryDate.getFullYear() === year && entryDate.getMonth() >= startMonth && entryDate.getMonth() < endMonth;
    });
  };

  const filteredData = filterData(NPKData);

  interface CustomTickProps {
    x: number;
    y: number;
    payload: { value: string };
  }

  const CustomXAxisTick: React.FC<CustomTickProps> = ({ x, y, payload }) => (
    <g transform={`translate(${x},${y})`}>
      <rect x={-25} y={-10} width={50} height={20} fill="#f0f0f0" stroke="#ccc" />
      <text x={0} y={0} textAnchor="middle" dominantBaseline="middle">{payload.value}</text>
    </g>
  );

  return (
    <div>
      <div className="bg-white-50 shadow-6dp rounded-lg p-4">
        <h3 className="font-satoshi font-semibold text-heading-desktop-h6 mb-4">NPK Sensor</h3>
        <div className="flex space-x-4 mb-4">
          {years.map((yearOption) => (
            <button
              key={yearOption}
              onClick={() => handleYearChange(yearOption)}
              className={`border rounded px-4 py-2 ${
                year === yearOption ? "bg-green-500 text-white-50" : "bg-white text-black"
              }`}
            >
              {yearOption}
            </button>
          ))}
        </div>
        <div className="flex space-x-4 mb-4">
          {["Jan-Mar", "Apr-Jun", "Jul-Sep", "Oct-Dec"].map((trimonthLabel, index) => (
            <button
              key={index}
              onClick={() => handleTrimonthChange(index)}
              className={`border rounded px-4 py-2 ${
                trimonth === index ? "bg-green-500 text-white-50" : "bg-white text-black"
              }`}
            >
              {trimonthLabel}
            </button>
          ))}
        </div>
        <div style={{ overflowX: 'auto' }}>
          <ResponsiveContainer width={1000} height={300}>
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={<CustomXAxisTick x={0} y={0} payload={{ value: "" }} />} tickMargin={10} />
              <YAxis domain={[0, 'dataMax + 5']} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="npkLevel"
                stroke="#8B4513"
                fill="rgba(67, 199, 89, 0.2)"
                strokeWidth={2}
                dot={true}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default NPKSensor;