import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';



const newLocal = "DeviceType";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  link: any = ['/index'];


  constructor(private http: HttpClient) {

  }

  ngOnInit() { 
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onLogin(value: any) {
    debugger
    let postData = { Username : value.username, Password: value.password, Device: {DeviceType: 3, DeviceId: "Chrome-3000", RegistrationID:"3000",
    GuiVersion:"1.0.0"} }
    this.http
    .post('https://agmotemplate-api-staging.azurewebsites.net/v1/accounts/login', postData)
    .subscribe(responseData => {
      console.log(responseData);
    });
  }

  private fetchPosts() {
    this.http
    .get('https://www.getpostman.com/collections/a0341285167ec57c13a9/v1/accounts/me')
    .subscribe(posts => {
      console.log(posts);
  

    });

   
  }

}

  






