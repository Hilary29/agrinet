import { UUID } from 'crypto';

export interface Farm{
    farmer : UUID;
    name: string;
    image : string[];
    location: string;
    crops: string[];
    devices: string[];
}

export const farms: Farm[] = [
    {
        farmer: '1-b-3-a-4',
        name: 'Farm 1',
        image: ['/images/tomato-forum.jpeg'],
        location: 'bandjoun, west Cameroon',
        crops: ['Maize', 'Tomato', 'Pepper'],
        devices: ['Greenhouse Sensor 1', 'Humidity Sensor 2', 'Weather monitoring']
    },
    {
        farmer: '1-b-3-a-4', 
        name: 'Farm 2',
        image: ['/images/organic-farming-forum.jpg'],
        location: 'Mbouda, west Cameroon',
        crops: ['Maize', 'Tomato', 'Pepper'],
        devices: ['Greenhouse Sensor 1', 'Humidity Sensor 2', 'Weather monitoring']
    },
    {
        farmer: '1-b-3-a-4',
        name: 'Farm 3',
        image: ['/images/small-farm-forum.jpg'],
        location: 'Penja, littoral Cameroon',
        crops: ['Maize', 'Tomato', 'Pepper'],
        devices: ['Greenhouse Sensor 1', 'Humidity Sensor 2', 'Weather monitoring']
    },
    {
        farmer: '1-b-3-a-4',
        name: 'Farm 4',
        image: ['/images/greenhouse-forum.jpg'],
        location: 'Bamenda, north west Cameroon',
        crops: ['Maize', 'Tomato', 'Pepper'],
        devices: ['Greenhouse Sensor 1', 'Humidity Sensor 2', 'Weather monitoring']
    },
    {
        farmer: '1-b-3-a-4',
        name: 'Farm 5',
        image: ['/images/pests-forum.jpg'],
        location: 'Buea, south west Cameroon',
        crops: ['Maize', 'Tomato', 'Pepper'],
        devices: ['Greenhouse Sensor 1', 'Humidity Sensor 2', 'Weather monitoring']
    },
    {
        farmer: '2-c-4-d-5',
        name: 'Farm 6',
        image: ['/images/pests-forum.jpg'],
        location: 'Douala, littoral Cameroon',
        crops: ['Maize', 'Tomato', 'Pepper'],
        devices: ['Greenhouse Sensor 1', 'Humidity Sensor 2', 'Weather monitoring']
    },
    {
        farmer: '1-b-3-a-4',
        name: 'Farm 7',
        image: ['/images/community-garden-forum.jpg'],
        location: 'Yaounde, centre Cameroon',
        crops: ['Maize', 'Tomato', 'Pepper'],
        devices: ['Greenhouse Sensor 1', 'Humidity Sensor 2', 'Weather monitoring']
    },
    {
        farmer: '2-c-4-d-5',
        name: 'Farm 8',
        image: ['/images/community-garden-forum.jpg'],
        location: 'Kumba, south west Cameroon',
        crops: ['Maize', 'Tomato', 'Pepper'],
        devices: ['Greenhouse Sensor 1', 'Humidity Sensor 2', 'Weather monitoring']
    },
    {
        farmer: '1-b-3-a-4',
        name: 'Farm 9',
        image: ['/images/microgreens-forum.jpg'],
        location: 'Bafoussam, west Cameroon',
        crops: ['Maize', 'Tomato', 'Pepper'],
        devices: ['Greenhouse Sensor 1', 'Humidity Sensor 2', 'Weather monitoring']
    },
    {
        farmer: '2-c-4-d-5',
        name: 'Farm 10',
        image: ['/images/microgreens-forum.jpg'],
        location: 'Limbe, south west Cameroon',
        crops: ['Maize', 'Tomato', 'Pepper'],
        devices: ['Greenhouse Sensor 1', 'Humidity Sensor 2', 'Weather monitoring']
    }
]