import { Injectable } from '@angular/core';
import { Hotel } from 'src/app/domain/hotel';
import { AdditionalService } from 'src/app/domain/AdditionalService';

@Injectable({
  providedIn: 'root'
})
export class ListHotelService {

  hotels: Hotel[] = [
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
      selectedRoom: 4000, totalSpend: 0

    },
    {
      id: 2, name: 'Helium', adress: 'bariloche', photoUrl: "https://www.localiza.com/argentina-site/es-ar/viaja-en-auto/PublishingImages/Banner_Top_Bariloche.png", stars: 3, rooms:
        [
          { type: "simple Economica", price: 4600 },
          { type: "simple Estandar", price: 1000 },
          { type: "simple Economica", price: 2500 }
        ], additionalServices:
        [
          { name: "desayuno", price: 100, Checked: true },
          { name: "sala de estar", price: 200, Checked: false },
          { name: "sext Shop", price: 300, Checked: true },
          { name: "peluqueria", price: 400, Checked: false }
        ], selectedRoom: 4600, totalSpend: 0
    },
    {
      id: 3, name: 'Lithium', adress: 'mendoza', photoUrl: "https://images.clarin.com/2017/07/19/mendoza-ofrece-una-innumerable-de___S16DieTHW_1256x620.jpg", stars: 4, rooms:
        [
          { type: "triple Economica", price: 40000 },
          { type: "cuadruple Estandar", price: 10000 },
          { type: "triple Economica", price: 20000 }
        ], additionalServices:
        [
          { name: "merienda", price: 500, Checked: true },
          { name: "Cena", price: 600, Checked: false },
          { name: "aeropuerto", price: 760, Checked: true },
          { name: "futbol", price: 340, Checked: false }
        ], selectedRoom: 10000, totalSpend: 0
    },
    {
      id: 4, name: 'Beryllium', adress: 'usuahia', photoUrl: "https://www.conclusion.com.ar/wp-content/uploads/2019/09/ushuaia-1.jpg", stars: 3, rooms:
        [
          { type: "doble barata", price: 4000 },
          { type: "doble rata", price: 5000 },
          { type: "triple cheta", price: 6000 }
        ], additionalServices:
        [
          { name: "camita", price: 450, Checked: true },
          { name: "cumbia", price: 550, Checked: false },
          { name: "noSabiaquePoner", price: 750, Checked: true },
          { name: "anime", price: 350, Checked: false }
        ], selectedRoom: 6000, totalSpend: 0
    },

  ];

  getAllHotels() {
    return this.hotels
  }

  getHotel(id2: number) {
    return (this.hotels.find(element => element.id == id2))
  }
  
}
