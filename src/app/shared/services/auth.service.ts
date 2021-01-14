import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {

  Data: any; 
  data_id: any; 
  data_phoneNumber: any; 
  data_fullName: any; 
  data_nickname: any; 
  data_gender: any; 
  data_isActive: any; 
  data_lastLoginDate: any; 
  data_registeredDate: any;

  happy = 123;
 
  httpHeaders: HttpHeaders ;

  constructor( private http: HttpClient) {
    
   }

   GetData() {
    
    let tokenTwo = localStorage.getItem("token");
    this.http
    .get('https://agmotemplate-api-staging.azurewebsites.net/admin/v1/accounts/me', 
    {
      headers: new HttpHeaders({'Authorization': 'Bearer '+ tokenTwo})
    })

    .subscribe(responseData => {
    this.Data = responseData;
    localStorage.setItem("data-id", this.Data["id"]);
    localStorage.setItem("data-phoneNumber", this.Data["phoneNumber"]);
    localStorage.setItem("data-fullName", this.Data["fullName"]);
    localStorage.setItem("data-nickname", this.Data["nickname"]);
    localStorage.setItem("data-gender", this.Data["gender"]);
    localStorage.setItem("data-isActive", this.Data["isActive"]);
    localStorage.setItem("data-lastLoginDate", this.Data["lastLoginDate"]);
    localStorage.setItem("data-registeredDate", this.Data["registeredDate"]);
    });
  }

  ShowData() {
    this.data_id = localStorage.getItem("data-id");
    this.data_phoneNumber = localStorage.getItem("data-phoneNumber");
    this.data_fullName = localStorage.getItem("data-fullName");
    this.data_nickname = localStorage.getItem("data-nickname");
    this.data_gender = localStorage.getItem("data-gender");
    this.data_isActive = localStorage.getItem("data-isActive");
    this.data_lastLoginDate = localStorage.getItem("data-lastLoginDate");
    this.data_registeredDate = localStorage.getItem("data-registeredDate");
    
  }
}