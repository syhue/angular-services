import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {

  Data: any; 
  data_id: any = 1233; 
  data_phoneNumber: any; 
  data_fullName: any; 
  data_nickname: any; 
  data_gender: any; 
  data_isActive: any; 
  data_lastLoginDate: any; 
  data_registeredDate: any;

  happy = 123;
 
  httpHeaders: HttpHeaders ;

  constructor( private http: HttpClient) {}

   GetData() {    
    const endpoint = 'https://agmotemplate-api-staging.azurewebsites.net/admin/v1/accounts/me';
    let tokenTwo = localStorage.getItem("token");
    return this.http
    .get(endpoint, 
    {
      headers: new HttpHeaders({'Authorization': 'Bearer '+ tokenTwo})
    })

    }

}