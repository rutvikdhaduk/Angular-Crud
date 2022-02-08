import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/Employe/";

  getData():Observable<Array<Data>>{
    return this.http.get<Array<Data>>(this.url);
  }
  addData(body):Observable<Array<Data>>{
    return this.http.post<Array<Data>>(this.url, body);
  }
  updateData(id,body){
    this.http.put(this.url + id, body);
  }
  delData(id){
    this.http.delete(this.url+id);
  }
}

export class Data{
  id: number = 0;
  companyename: string;
  Fname: string;
  Lname: string;
  email: string;
  mobileno: string;
  salary: string;
}
