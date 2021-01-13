import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/shared/services/auth.service';
import { StorageService } from '../../app/shared/services/storage.service';
import { PostsService } from '../shared/services/posts.service';


const newLocal = "DeviceType";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [StorageService, AuthService],
})
export class LoginComponent implements OnInit {

  link: any = ['/index'];




  constructor(private postsService: PostsService, private authService: AuthService) {

  }

  ngOnInit() { 

  }

  onLogin(postData: any){
    this.postsService.createAndStorePost(postData);
    this.authService.ExtractLocalStorage(postData);
  }

  onGetData() {
    this.authService.GetData();
  }



}

  






