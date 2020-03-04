import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {HotelRegisteredComponent} from './components/hotelRegistered/hotelRegistered.component'
import {  HotelListComponent} from './components/hotelList/hotelList.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HotelDetailsComponent } from './components/hotelDetails/hotelDetails.component';
import { MatInputModule } from '@angular/material';
import { MyReservationsComponent } from './components/myReservations/myReservations.component';
@NgModule({
  declarations: [
    AppComponent,
    HotelRegisteredComponent,
    HotelListComponent,
    HotelDetailsComponent,
    MyReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
