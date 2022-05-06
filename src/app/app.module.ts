import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCrudComponent } from './form-crud/form-crud.component';
import { SecureRoutingModule } from './secure/secure-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FormCrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SecureRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
