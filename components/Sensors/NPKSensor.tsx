import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

interface NPKSensorProps {
    data: { date: string; npkLevel: number }[];
}

const NPKSensor: React.FC<NPKSensorProps> = ({ data }) => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 3 }, (_, index) => currentYear - index);
    const [year, setYear] = useState(currentYear);
    const [trimonth, setTrimonth] = useState(0);

    const filterData = (data: any[]) => {
        const startMonth = trimonth * 3;
        const endMonth = startMonth + 3;
        return data.filter((entry) => {
            const entryDate = new Date(entry.date);
            return entryDate.getFullYear() === year && entryDate.getMonth() >= startMonth && entryDate.getMonth() < endMonth;
        });
    };

    const filteredData = filterData(data);

    return (
        <div>
            <h3>NPK Sensor</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={filteredData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="npkLevel" stroke="#8B4513" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default NPKSensor;