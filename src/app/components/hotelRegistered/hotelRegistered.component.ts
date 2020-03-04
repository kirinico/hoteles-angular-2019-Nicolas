import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/domain/hotel';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/user';
import { UserRegisterService } from 'src/app/service/userRegister/userRegister.service';
import { MatSnackBar } from '@angular/material';
import { ListHotelService } from 'src/app/service/listHotelService/listHotel.service';

@Component({
  selector: 'app-hotelRegistered',
  templateUrl: './hotelRegistered.component.html',
  styleUrls: ['./hotelRegistered.component.css'],
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
    .bad {
      color: #deb0b0;
    }
    .filled.bad {
      color: #ff1e1e;
    }
  `]

})
export class HotelRegisteredComponent  implements OnInit {
  @Input() isReserved : boolean = false
  @Input() hotel: Hotel = null
  user: User
  price: number
  currentRate = 3;
  reserveDay: number =1
  dateTo: Date
  constructor(private router: Router, private userRegisterService: UserRegisterService, private snackBar: MatSnackBar) { }

  ngOnInit(){
    this.price = this.minRoom()
    this.user = this.userRegisterService.user
    this.reserveDay = this.userRegisterService.getDay()
    
  }

  navigateToHotelDetails(idHotel: number) {
    if(!this.isReserved)
    this.router.navigateByUrl('hotelRegistrado/detalles/' + idHotel);
  }

  minRoom(){
    const mapPriceRoom =this.hotel.rooms.map(room=> room.price)
      return Math.min.apply(null, mapPriceRoom)
  }

  itIsReserved(){
    return this.isReserved
  }

  dateFromUser(){
    this.user.datefrom.toLocaleString()
  }

  deleteReserved(){
    this.openSnackBar("se cancelado con exito")
    this.userRegisterService.deleteRegisterdHotel(this.hotel)
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "x", {
      duration: 2000,
    });
  }
  

}

