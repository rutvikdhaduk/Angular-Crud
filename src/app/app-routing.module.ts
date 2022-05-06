import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponent } from './secure/secure/secure.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'',
    loadChildren:()=>import('./secure/secure.module').then(m=>m.SecureModule),
    component:SecureComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
