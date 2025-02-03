// components/iotdatagenerator.ts
interface SensorData {
    date: string;
    npkLevel: number; // NPK levels (40 to 65)
    humidity: number; // Humidity (30% to 70%)
    phLevel: number; // pH levels (6.0 to 8.5)
    temperature: number; // Temperature (15°C to 45°C)
}

const generateDailyData = (days: number): SensorData[] => {
    const data: SensorData[] = [];
    const startDate = new Date();

    for (let i = 0; i < days; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() - i);

        data.push({
            date: date.toLocaleString('default', { month: 'short', day: '2-digit' }), // Format: Jan 23
            npkLevel: Math.floor(Math.random() * (65 - 40 + 1)) + 40,
            humidity: Math.floor(Math.random() * (70 - 30 + 1)) + 30,
            phLevel: parseFloat((Math.random() * 2.5 + 6.0).toFixed(1)),
            temperature: Math.floor(Math.random() * (45 - 15 + 1)) + 15,
        });
    }

    return data.reverse(); // Reverse to have the latest date first
};

const dailyData = generateDailyData(365); // Generate data for 365 days

export const NPKData = dailyData.map(({ date, npkLevel }) => ({ date, npkLevel }));
export const HumidityData = dailyData.map(({ date, humidity }) => ({ date, humidity }));
export const PHData = dailyData.map(({ date, phLevel }) => ({ date, phLevel }));
export const TempData = dailyData.map(({ date, temperature }) => ({ date, temperature }));