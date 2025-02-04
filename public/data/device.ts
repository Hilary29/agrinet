export interface Device {
    id: number;
    name: string;
    type: string;
    support: string;
    mcu: string;
    status: 'Active' | 'Inactive';
    description?: string;
}

export const devices: Device[] = [];