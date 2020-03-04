import { Injectable } from '@angular/core';
import { User } from 'src/app/domain/user';
import { Hotel } from 'src/app/domain/hotel';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  user: User = {
    id: 1, name: 'nico', totalSpend: 5100, datefrom: new Date(1,1,2001), dateTo: new Date(1,1,2001), registeredhotels: [
      {
        id: 1, name: 'Hydrogen', adress: 'cafayate', photoUrl: "https://cdn.civitatis.com/argentina/salta/galeria/quebrada-conchas-anfiteatro.jpg", stars: 5, rooms:
          [
            { type: "doble Economica", price: 4000 },
            { type: "doble Estandar", price: 5000 },
            { type: "triple Economica", price: 6000 }
          ], additionalServices:
          [
            { name: "almuerzo", price: 400, Checked: true },
            { name: "Cena", price: 500, Checked: false },
            { name: "Cochera", price: 700, Checked: true },
            { name: "Lavanderia", price: 300, Checked: false }
          ],
        selectedRoom: 4000, totalSpend: 5100

      }
    ]
  }
  

  pushRegisteredhotels(hotel: Hotel, dateFrom: Date, dateTo: Date) {
    this.user.datefrom = dateFrom
    this.user.dateTo = dateTo

    this.getHotelRegistered().push(hotel)

  }

  getHotelRegistered() {
    return this.user.registeredhotels
  }


  getTotalSpeed() {
    return this.user.totalSpend
  }

  deleteRegisterdHotel(hotel: Hotel) {
    const index = this.getHotelRegistered().indexOf(hotel, 0);
    if (index > -1) {
      this.user.registeredhotels.splice(index, 1);
    }
  }

  getHotel(id2: number) {
    return (this.user.registeredhotels.find(element => element.id == id2))
  }

  getDay() {
    return (this.user.dateTo.getTime() - this.user.datefrom.getTime())/ (1000 * 3600 * 24)
  }

} 
