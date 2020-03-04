import { Room } from './Room'
import { AdditionalService } from './AdditionalService'

export class Hotel {
    id: number
    name: string
    adress: string
    photoUrl: string
    stars: number
    rooms: Room[]
    additionalServices: AdditionalService[]
    selectedRoom: number
    totalSpend: number 
    
    
}