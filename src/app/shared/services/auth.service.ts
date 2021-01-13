import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostsService } from './posts.service';

@Injectable()
export class AuthService {
  tokenTwo: any;

  constructor(private postsService: PostsService, private http: HttpClient) {

   }

   ExtractLocalStorage(value: any) {
     this.tokenTwo = localStorage.getItem("tokenTwo");

    return this.tokenTwo;
   }

   GetData() {
    this.http.get('https://agmotemplate-api-staging.azurewebsites.net/admin/v1/accounts/me', this.tokenTwo)
    .subscribe(responseData => {
    console.log(responseData);
    })
    
    

  }
}
