import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {

  Data: any;
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
    console.log(responseData);
    this.Data = responseData;
    // console.log(this.Data);
    return this.Data;
    });
    
    
    
  }
}
