import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportcodeComponent } from '../airportcode/airportcode.component';
import { AirportdetailsComponent } from '../airportdetails/airportdetails.component';

const routes: Routes = [
  {
    path:'',
    component:AirportcodeComponent
  },
  {
    path:'code',
    component:AirportcodeComponent
  },
  {
    path:'detail',
    component:AirportdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirportRoutingModule { }
