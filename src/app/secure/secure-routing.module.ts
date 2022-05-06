import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponent } from './secure/secure.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'airport',
    loadChildren:()=>import('./airport/airport.module').then(m=>m.AirportModule),
    component:SecureComponent,
  },
  {
    path:'test',
    component:TestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
