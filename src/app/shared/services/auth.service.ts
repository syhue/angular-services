import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {
  tokenTwo: any;
  httpHeaders: HttpHeaders ;

  constructor( private http: HttpClient) {
    
   }



   GetData() {
    this.tokenTwo = localStorage.getItem("tokenTwo");
    this.httpHeaders = new HttpHeaders({
      Authorization: ('Bearer '+ this.tokenTwo),
    });
    console.log(this.httpHeaders);
    this.http
    .get('https://agmotemplate-api-staging.azurewebsites.net/admin/v1/accounts/me', { headers: this.httpHeaders})
    .subscribe(responseData => {
    console.log(responseData);
    })
    
    

  }
}
