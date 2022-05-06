import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCrudComponent } from './form-crud/form-crud.component';

const routes: Routes = [
  {
    path:"",
    component:FormCrudComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
