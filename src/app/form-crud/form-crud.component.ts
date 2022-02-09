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
        this.AddEmoloyDetails = new Form();
      });
    }
    else {
      alert("Plese Fill All Details");
    }
  }

  filldatainedit(detail: Form,id) {
    this.data.updateData(id,detail).subscribe(u=>{
      console.log("Update=",u);
      this.editEmoloyDetails = detail;
    })
  }

  Delete(id) {
    this.data.delData(id).subscribe(d=>{
      let datas=this.EmoloyDetails;
      let index=datas.findIndex(x=>x.id===id);
      datas.splice(index,1);
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
  salary: string;
}
