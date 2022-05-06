import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirportRoutingModule } from './airport-routing.module';
import { AirportdetailsComponent } from '../airportdetails/airportdetails.component';
import { AirportcodeComponent } from '../airportcode/airportcode.component';


@NgModule({
  declarations: [
    AirportdetailsComponent,
    AirportcodeComponent,
  ],
  imports: [
    CommonModule,
    AirportRoutingModule
  ]
})
export class AirportModule { }
