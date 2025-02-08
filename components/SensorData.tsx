import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TempSensor from '@/components/Sensors/TempSensor';
import PHSensor from '@/components/Sensors/PHSensor';
import NPKSensor from '@/components/Sensors/NPKSensor';
import HumiditySensor from '@/components/Sensors/HumiditySensor';

interface SensorData {
    date: string;
    npkLevel: number; // NPK levels calculated from N, P, K
    humidity: number; // Humidity (30% to 70%)
    phLevel: number; // pH levels (6.0 to 8.5)
    temperature: number; // Temperature (15°C to 45°C)
}

// Function to calculate NPK level from N, P, K
const calculateNPK = (N: number, P: number, K: number): number => {
    return Math.floor((N + P + K) / 3);
};

const SensorDataComponent: React.FC = () => {
    const [dailyData, setDailyData] = useState<SensorData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch daily data from the backend
    const fetchSensorData = async (): Promise<void> => {
        try {
            const response = await axios.get('/api/v1/iot/query');
            const data = response.data;

            const transformedData = data.map((item: any) => {
                const N = item.n;
                const P = item.p;
                const K = item.k;
                const date = new Date(item.instant).toLocaleString('default', { month: 'short', day: '2-digit', year: 'numeric' });

                const npkLevel = calculateNPK(N, P, K);

                return {
                    date,
                    npkLevel,
                    humidity: item.h, // Assuming this is the humidity
                    phLevel: item.ph, // Assuming this is the pH level
                    temperature: item.t, // Assuming this is the temperature
                };
            });

            setDailyData(transformedData);

            // Save to local storage
            localStorage.setItem('sensorData', JSON.stringify(transformedData));

            // Log the transformed data to the console
            console.log('Fetched Sensor Data:', transformedData);
        } catch (error) {
            console.error('Error fetching sensor data:', error);
            setError('Failed to fetch sensor data.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSensorData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Sensor Data</h1>
            <TempSensor data={dailyData} />
            <PHSensor data={dailyData} />
            <NPKSensor data={dailyData} />
            <HumiditySensor data={dailyData} />
        </div>
    );
};

export default SensorDataComponent;