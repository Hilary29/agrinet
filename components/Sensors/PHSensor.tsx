import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

interface PHSensorProps {
    data: { date: string; phLevel: number }[];
}

const PHSensor: React.FC<PHSensorProps> = ({ data }) => {
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
            <h3>pH Sensor</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={filteredData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="phLevel" fill="#34c9c2" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PHSensor;