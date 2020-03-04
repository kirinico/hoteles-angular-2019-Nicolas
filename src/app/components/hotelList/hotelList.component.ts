import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/domain/hotel';
import { ListHotelService } from 'src/app/service/listHotelService/listHotel.service';
import { UserRegisterService } from 'src/app/service/userRegister/userRegister.service';



@Component({
  selector: 'app-hotelList',
  templateUrl: './hotelList.component.html',
  styleUrls: ['./hotelList.component.css']
})
export class HotelListComponent implements OnInit {
  
  hotels: Hotel[]
  constructor(private listHotelService: ListHotelService, private userRegisterService: UserRegisterService) { }

  ngOnInit() {
    this.hotels = this.listHotelService.getAllHotels()
  }

  sameHotel(hotel: Hotel){
    return this.userRegisterService.getHotel(hotel.id) == null
  }
}
