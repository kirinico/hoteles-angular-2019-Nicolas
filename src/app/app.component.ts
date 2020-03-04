import { Component, OnInit } from '@angular/core';
import { User } from './domain/user';
import { UserRegisterService } from './service/userRegister/userRegister.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.user = this.userRegisterService.user
  }
  title = 'hoteles-angular-app';
  user: User

  constructor(private userRegisterService: UserRegisterService, private router: Router){}

  navegationReservedHotels(){
    this.router.navigate(['hotelRegistrado/MyReservations']);
  }
}
