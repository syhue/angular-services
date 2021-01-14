import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { StorageService } from '../../shared/services/storage.service';
import { PostsService } from '../../shared/services/posts.service';


const newLocal = "DeviceType";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [StorageService, AuthService],
})
export class LoginComponent implements OnInit {

  link: any = ['/main'];
  data: any;
  error: string = null; 

  constructor(private postsService: PostsService, private authService: AuthService) { }

  ngOnInit() {}

  onLogin(postData: any){
    this.postsService.createAndStorePost(postData);
    this.error = this.postsService.error;
  }

  onGetData() {
    this.authService.GetData();
  }
}

  






