import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportdetailsComponent } from './airportdetails.component';

describe('AirportdetailsComponent', () => {
  let component: AirportdetailsComponent;
  let fixture: ComponentFixture<AirportdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
