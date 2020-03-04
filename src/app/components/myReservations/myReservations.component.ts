import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from 'src/app/service/userRegister/userRegister.service';
import { Hotel } from 'src/app/domain/hotel';

@Component({
  selector: 'app-myReservations',
  templateUrl: './myReservations.component.html',
  styleUrls: ['./myReservations.component.css']
})
export class MyReservationsComponent implements OnInit {
  hotels: Hotel[]

  constructor(private userRegisterService: UserRegisterService) { }

  ngOnInit() {
    this.hotels= this.userRegisterService.getHotelRegistered()
  }

}
