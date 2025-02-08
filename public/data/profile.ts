import { UUID } from "crypto"
import { Farm, farms } from "./farm"

export interface Profile{
    id : UUID
    name : string
    surname : string
    storename: string
    email : string
    phone : string[]
    address : string
    password : string
    avatar : string[]
    farms : Farm[]
}

export const profiles: Profile[] = [
    {
        id: '1-b-3-a-4',
        name: 'NDONGO',
        surname: 'Jean pierre',
        storename: 'JpFarm',
        email: 'jpierre@example.com',
        phone: ['+237 678 90 90 90', '+237 678 90 90 91'],
        address: 'Camp Sonel Essos',
        password: 'password123',
        avatar: ['/images/avatar1.png'],
        farms: farms.filter(farm => farm.farmer === '1-b-3-a-4')
    },
    {
        id: '2-c-4-d-5',
        name: 'MBOUA',
        surname: 'Paul',
        storename: 'Mboua et Fils',
        email: 'paul@example.com',
        phone: ['+237 679 80 80 80', '+237 679 80 80 81'],
        address: 'Rue de la Gare',
        password: 'password456',
        avatar: ['/images/avatar2.png'],
        farms: farms.filter(farm => farm.farmer === '2-c-4-d-5')
    }
]
