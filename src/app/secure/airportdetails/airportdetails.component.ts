import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-airportdetails',
  templateUrl: './airportdetails.component.html',
  styleUrls: ['./airportdetails.component.scss']
})
export class AirportdetailsComponent implements OnInit {
  public type: any;
  constructor() { }

  ngOnInit(): void {
  }

}
