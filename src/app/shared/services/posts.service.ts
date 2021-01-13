import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  tokenOne: any;
  

  constructor( private http: HttpClient) {}

  createAndStorePost(value: any) {
   
    let postData = { Username : value.username, Password: value.password, Device: {DeviceType: 3, DeviceId: "Chrome-3000", RegistrationID:"3000",
    GuiVersion:"1.0.0"} }
    this.http
    .post('https://agmotemplate-api-staging.azurewebsites.net/admin/v1/accounts/login', postData)
    .subscribe(responseData => {
    this.tokenOne = responseData["accessToken"] ;
    localStorage.setItem("token", this.tokenOne);
    return this.tokenOne
    });

  } 


}
