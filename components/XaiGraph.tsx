import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface XaiGraphProps {
    crop: string;
    yield: string;
}

const XaiGraph: React.FC<XaiGraphProps> = ({ crop, yield: estimatedYield }) => {
    // Sample data for the graph
    const data = [
        { name: crop, yield: parseFloat(estimatedYield.split(' ')[0]) }, // Assuming yield is in kg per hectare
        { name: "Ideal Yield", yield: 2500 }, // Example ideal yield for comparison
    ];

    return (
        <div className="mt-6">
            <h3 className="font-satoshi mb-4">Yield Comparison</h3>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="yield" fill="#43c759" />
            </BarChart>
        </div>
    );
};

export default XaiGraph;