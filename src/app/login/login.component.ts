import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private http: HttpClient) { 
    // if (this.email.length > 0) {
    //   this.canSubmit = true;
    // }
  }

  ngOnInit(): void {

  }

  onLogin(postData: { email: string; password: string}) {
    // Send Http request
    this.http
      .post(
        'https://ng-complete-guide-9faaa-default-rtdb.firebaseio.com/',
        postData
      )

      .subscribe(responseData => {
        console.log(responseData)
      });     

  }


}
