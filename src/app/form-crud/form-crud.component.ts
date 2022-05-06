import { Component, OnInit } from '@angular/core';
import { TestService, Data } from '../test.service';

@Component({
  selector: 'app-form-crud',
  templateUrl: './form-crud.component.html',
  styleUrls: ['./form-crud.component.scss']
})

export class FormCrudComponent implements OnInit {
  EmployeeDetails: Array<Employee> = new Array<Employee>();
  FilterEmployeeDetails: Array<Employee> = new Array<Employee>();
  AddEmoloyDetails: Employee;
  editEmoloyDetails: Employee;
  searchValue: string;

  constructor(private data: TestService) { }

  ngOnInit(): void {
    this.AddEmoloyDetails = new Employee();
    this.AddEmoloyDetails.address = new Addressing();
    this.AddEmoloyDetails.personalDetails = new PersonalData();
    this.getData();
  }

  private getData() {
    this.data.getData().subscribe(x => {
      console.log(x);
      this.EmployeeDetails = x;
      this.FilterEmployeeDetails = x;
    });
  }

  savedata() {
    console.log(this.AddEmoloyDetails.address);
    if (this.AddEmoloyDetails.companyename && this.AddEmoloyDetails.Fname && this.AddEmoloyDetails.Lname && this.AddEmoloyDetails.email && this.AddEmoloyDetails.mobileno && this.AddEmoloyDetails.salary && this.AddEmoloyDetails.address.city && this.AddEmoloyDetails.address.blockno && this.AddEmoloyDetails.address.currentAddress && this.AddEmoloyDetails.personalDetails.addharno && this.AddEmoloyDetails.personalDetails.panno && this.AddEmoloyDetails.personalDetails.passbookno) {
      this.data.addData(this.AddEmoloyDetails).subscribe((x) => {
        this.getData();
        this.AddEmoloyDetails = new Employee();
        this.AddEmoloyDetails.address = new Addressing();
        this.AddEmoloyDetails.personalDetails = new PersonalData();
      });
    }
    else {
      alert("Plese Fill All Details");
    }
  }

  filldatainedit(detail: Employee) {
    this.editEmoloyDetails = detail;
  }
  editData() {
    this.data.updateData(this.editEmoloyDetails).subscribe(d => {
      this.getData();
    })
  }
  deleteEmployee(item: Employee) {
    this.data.delData(item.id).subscribe(d => {
      let index = this.FilterEmployeeDetails.indexOf(item);
      this.FilterEmployeeDetails.splice(index, 1);
    })
  }
  // for Search Employee

  search() {
    if (this.searchValue) {
      let searchEmployee = new Array<Employee>();
      if (this.EmployeeDetails.length > 0) {
        for (let emp of this.EmployeeDetails) {
          if (JSON.stringify(emp).toLowerCase().indexOf(this.searchValue.toLowerCase()) > 0) {
            searchEmployee.push(emp);
          }
        }
        this.FilterEmployeeDetails= searchEmployee;
      }
    }
    else {
      this.FilterEmployeeDetails = this.EmployeeDetails;
    }
  }
}

export class Employee {
  id: number;
  companyename: string;
  Fname: string;
  Lname: string;
  email: string;
  mobileno: string;
  address: Addressing;
  salary: string;
  personalDetails: PersonalData;
}

export class Addressing {
  city: string;
  blockno: string;
  currentAddress: string;
}

export class PersonalData {
  addharno: string;
  panno: string;
  passbookno: string;
}
