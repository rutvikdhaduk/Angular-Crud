import { Component, OnInit } from '@angular/core';
import { TestService, Data } from '../test.service';

@Component({
  selector: 'app-form-crud',
  templateUrl: './form-crud.component.html',
  styleUrls: ['./form-crud.component.scss']
})

export class FormCrudComponent implements OnInit {
  EmoloyDetails: Array<Form> = new Array<Form>();
  AddEmoloyDetails: Form;
  editEmoloyDetails: Form;

  filterstring:string
  constructor(private data: TestService) { }

  ngOnInit(): void {
    this.AddEmoloyDetails = new Form();
    this.AddEmoloyDetails.address = new Addressing();
    this.AddEmoloyDetails.personalDetails = new PersonalData();
    this.getData();
  }

  private getData() {
    this.data.getData().subscribe(x => {
      console.log(x);
      this.EmoloyDetails = x;
    });
  }

  savedata() {
    console.log(this.AddEmoloyDetails.address);
    if (this.AddEmoloyDetails.companyename && this.AddEmoloyDetails.Fname && this.AddEmoloyDetails.Lname && this.AddEmoloyDetails.email && this.AddEmoloyDetails.mobileno && this.AddEmoloyDetails.salary && this.AddEmoloyDetails.address.city && this.AddEmoloyDetails.address.blockno && this.AddEmoloyDetails.address.currentAddress && this.AddEmoloyDetails.personalDetails.addharno && this.AddEmoloyDetails.personalDetails.panno && this.AddEmoloyDetails.personalDetails.passbookno) {
      this.data.addData(this.AddEmoloyDetails).subscribe((x) => {
        this.getData();
        this.AddEmoloyDetails = new Form();
        this.AddEmoloyDetails.address = new Addressing();
        this.AddEmoloyDetails.personalDetails = new PersonalData();
      });
    }
    else {
      alert("Plese Fill All Details");
    }
  }

  filldatainedit(detail: Form) {
    this.editEmoloyDetails = detail;
  }
  editData() {
    this.data.updateData(this.editEmoloyDetails).subscribe(d => {
      this.getData();
    })
  }

  Delete(id) {
    this.data.delData(id).subscribe(d => {
      this.getData();
    })
  }

}

export class Form {
  id: number;
  companyename: string;
  Fname: string;
  Lname: string;
  email: string;
  mobileno: string;
  address:Addressing;
  salary: string;
  personalDetails:PersonalData;
}

export class Addressing{
  city:string;
  blockno:string;
  currentAddress:string;
}

export class PersonalData{
  addharno:string;
  panno:string;
  passbookno:string;
}
