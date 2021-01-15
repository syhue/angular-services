import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  tokenOne: any;
  error : any;

  constructor( private http: HttpClient) {}

    login(value: any) {
      let postData = {
        Username: value.username,
        Password: value.password,
        Device: {
          DeviceType: 3, DeviceId: "Chrome-3000", RegistrationID: "3000", GuiVersion: "1.0.0"
        }
      }

      const endpoint = 'https://agmotemplate-api-staging.azurewebsites.net/admin/v1/accounts/login';

      return this.http.post(endpoint, postData).pipe(map((responseData: any) => {
        this.tokenOne = responseData["accessToken"];
        localStorage.setItem("token", this.tokenOne);
        return responseData;
      }));
    }



}
