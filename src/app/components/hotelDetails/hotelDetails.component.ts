import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Hotel } from 'src/app/domain/hotel';
import { ListHotelService } from 'src/app/service/listHotelService/listHotel.service';
import { Room } from 'src/app/domain/Room';
import { AdditionalService } from 'src/app/domain/AdditionalService';
import { FormControl } from '@angular/forms';
import { MatRadioChange, MatCheckbox, MatDatepickerInputEvent, MatSnackBar, DateAdapter, MAT_DATE_FORMATS, MatCheckboxChange } from '@angular/material';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AppDateAdapter, APP_DATE_FORMATS } from './dateAdapter';
import { UserRegisterService } from 'src/app/service/userRegister/userRegister.service';
@Component({
  selector: 'app-hotelDetails',
  templateUrl: './hotelDetails.component.html',
  styleUrls: ['./hotelDetails.component.css'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class HotelDetailsComponent implements OnInit {
  hotel: Hotel = new Hotel
  additionalServices: AdditionalService[] = null
  rooms: Room[] = null
  dateFrom: Date
  dateTo: Date
  minDate = new Date();
  min = new Date();
  totalRoom: number = 0
  date: number = 1
  additionalServicesLocal: AdditionalService[] = []
  constructor(private router: Router, private route: ActivatedRoute, private listHotelService: ListHotelService, private userRegisterService: UserRegisterService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.getHotel(routeParams.id)
    })

  }

  getHotel(id: number) {
    this.hotel =  this.listHotelService.getHotel(id)
    this.additionalServices = this.hotel.additionalServices
    this.rooms =  this.hotel.rooms
  }

  tomorrowDate(event: Date) {
    const manana = 24 * 60 * 60 * 1000
    return new Date(event.getTime() + manana)
  }

  datepickerDesde(event: Date) {
    this.dateTo = null
    this.dateFrom = event
    this.minDate = this.tomorrowDate(event)
  }
  datepickerHasta(event: Date) {
    this.dateTo = event
    this.totalAccumulatedHotel()
  }

  totalAccumulatedHotel() {
    this.date = (this.dateTo.getTime() - this.dateFrom.getTime()) / (1000 * 3600 * 24)
    const totalRoomAndServices = (this.totalRoom + this.totalAccumulatedServices()) * this.date
    this.hotel.totalSpend = totalRoomAndServices
  }
  totalAccumulatedServices() {
    return this.additionalServicesLocal.reduce((acc, service) => {
      
      return acc + service.price
    }, 0)

  }

  totalServices(additionalServices: AdditionalService, event: Boolean) {

    if (event) {
      this.additionalServicesLocal.push(additionalServices)
    }

    else {
      this.remove(additionalServices)
    }
    this.hotel.totalSpend = (this.totalRoom + this.totalAccumulatedServices()) * this.date

  }
  remove(additionalServices: AdditionalService) {

    const index = this.additionalServicesLocal.indexOf(additionalServices, 0);
    if (index > -1) {
      this.additionalServicesLocal.splice(index, 1);
    }
  }


  totalAmount(event: MatRadioChange) {
    this.totalRoom = event.value
    const totalRoomAndServices = (event.value + this.totalAccumulatedServices()) * this.date
    this.hotel.totalSpend = totalRoomAndServices

  }


  dateDisabled() {
    return this.dateFrom != null && this.dateTo != null && this.totalRoom
  }

  save() {
    this.userRegisterService.pushRegisteredhotels(this.hotel, this.dateFrom, this.dateTo)
    this.navigateRegisteredHotels()
    this.openSnackBar("Encuesta guardada con exito")
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, "x", {
      duration: 2000,
    });
  }

  navigateRegisteredHotels() {
    this.router.navigate(['encontrahotel']);
  }
}
