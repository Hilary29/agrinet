export interface Device {
    id: number;
    name: string;
    type: string;
    support: string;
    mcu: string;
    status: 'Active' | 'Inactive';
    description?: string;
}

export const devices: Device[] = [
    {
        id: 1,
        name: 'Greenhouse Sensor 1',
        type: 'Temperature sensor',
        support: 'Wi-Fi enabled',
        mcu: 'ESP32',
        status: 'Active',
    },
    {
        id: 2, 
        name: 'Humidity Sensor 2',
        type: 'Humidity sensor',
        support: 'Wi-Fi enabled',
        mcu: 'ESP32',
        status: 'Inactive',
    },
    {
        id: 3,
        name: 'Weather Monitoring',
        type: 'Station',
        support: 'Solar powered',
        mcu: 'Atmega',
        status: 'Active',
    },
];