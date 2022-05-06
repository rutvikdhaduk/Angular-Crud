import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportcodeComponent } from './airportcode.component';

describe('AirportcodeComponent', () => {
  let component: AirportcodeComponent;
  let fixture: ComponentFixture<AirportcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
