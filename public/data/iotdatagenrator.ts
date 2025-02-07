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

const generateDailyData = (days: number): SensorData[] => {
    const data: SensorData[] = [];
    const startDate = new Date('2023-01-01'); // Start from Jan 1, 2023

    for (let i = 0; i < days; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i); // Increment the date

        // Generate random N, P, and K levels
        const N = Math.floor(Math.random() * (65 - 40 + 1)) + 40;
        const P = Math.floor(Math.random() * (65 - 40 + 1)) + 40;
        const K = Math.floor(Math.random() * (65 - 40 + 1)) + 40;

        const npkLevel = calculateNPK(N, P, K); 

        data.push({
            date: date.toLocaleString('default', { month: 'short', day: '2-digit', year: 'numeric' }), 
            npkLevel,
            humidity: Math.floor(Math.random() * (70 - 30 + 1)) + 30,
            phLevel: parseFloat((Math.random() * 2.5 + 6.0).toFixed(1)),
            temperature: Math.floor(Math.random() * (45 - 15 + 1)) + 15,
        });
    }

    return data; // No need to reverse since we are generating from 2023 to the current date
};

const daysSinceStart = Math.floor((new Date().getTime() - new Date('2023-01-01').getTime()) / (1000 * 3600 * 24)); // Calculate days since Jan 1, 2023
const dailyData = generateDailyData(daysSinceStart); 

export const NPKData = dailyData.map(({ date, npkLevel }) => ({ date, npkLevel }));
export const NData = dailyData.map(({ date }) => ({
    date,
    N: Math.floor(Math.random() * (65 - 40 + 1)) + 40, 
}));
export const PData = dailyData.map(({ date }) => ({
    date,
    P: Math.floor(Math.random() * (65 - 40 + 1)) + 40, 
}));
export const KData = dailyData.map(({ date }) => ({
    date,
    K: Math.floor(Math.random() * (65 - 40 + 1)) + 40, 
}));
export const HumidityData = dailyData.map(({ date, humidity }) => ({ date, humidity }));
export const PHData = dailyData.map(({ date, phLevel }) => ({ date, phLevel }));
export const TempData = dailyData.map(({ date, temperature }) => ({ date, temperature }));