import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotelRegisteredComponent} from './components/hotelRegistered/hotelRegistered.component'
import {  HotelListComponent} from './components/hotelList/hotelList.component'
import { HotelDetailsComponent } from './components/hotelDetails/hotelDetails.component';
import { MyReservationsComponent } from './components/myReservations/myReservations.component';
const routes: Routes = [
  {path: 'hotelRegistrado', component: HotelListComponent},
  {path: 'hotelRegistrado/detalles/:id', component: HotelDetailsComponent},
  {path: 'hotelRegistrado/MyReservations', component: MyReservationsComponent},
  { path: '**', redirectTo: 'hotelRegistrado', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
