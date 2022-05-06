import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SecureComponent } from './secure/secure.component';
import { TestComponent } from './test/test.component';
import { AirportRoutingModule } from './airport/airport-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SecureComponent,
    TestComponent,
  ],
  imports: [
    CommonModule,
    SecureRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SecureModule { }
