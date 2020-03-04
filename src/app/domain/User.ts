import { Hotel } from './hotel'


export class User {
    id: number
    name: string
    registeredhotels: Hotel[]
    totalSpend: number
    datefrom: Date
    dateTo: Date
}