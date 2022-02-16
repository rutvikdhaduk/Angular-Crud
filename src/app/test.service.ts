import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/Employe";

  getData() {
    return this.http.get<Array<Data>>(this.url);
  }

  addData(body) {
    return this.http.post<Data>(this.url, body);
  }

  updateData(body) {
    return this.http.put<Data>(`${this.url}/${body.id}`, body);
  }

  delData(id) {
    return this.http.delete<Data>(`${this.url}/${id}`);
  }
}

export class Data {
  id: number = 0;
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
