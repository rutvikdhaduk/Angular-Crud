import { Component, OnInit } from '@angular/core';
import { TestService, Data } from '../test.service';

@Component({
  selector: 'app-form-crud',
  templateUrl: './form-crud.component.html',
  styleUrls: ['./form-crud.component.scss']
})
export class FormCrudComponent implements OnInit {
  EmoloyDetails: Array<Form> = new Array<Form>();
  editEmoloyDetails: Form;
  AddEmoloyDetails: Form;

  constructor(private data: TestService) { }

  ngOnInit(): void {
    this.AddEmoloyDetails = new Form();
    this.getData();
  }

  private getData() {
    this.data.getData().subscribe(x => {
      this.EmoloyDetails = x;
    });
  }

  savedata() {
    if (this.AddEmoloyDetails.companyename && this.AddEmoloyDetails.Fname && this.AddEmoloyDetails.Lname && this.AddEmoloyDetails.email && this.AddEmoloyDetails.mobileno && this.AddEmoloyDetails.salary) {
      this.data.addData(this.AddEmoloyDetails).subscribe((x) => {
        this.getData();
      });
    }
    else {
      alert("Plese Fill All Details");
    }
  }

  filldatainedit(detail: Form) {
    this.editEmoloyDetails = detail;
  }

  Delete(id) {
    this.EmoloyDetails.splice(id, 1);
  }
}

export class Form {
  id: number;
  companyename: string;
  Fname: string;
  Lname: string;
  email: string;
  mobileno: string;
  salary: string;
}
