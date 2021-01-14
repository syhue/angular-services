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
  isDataShow: boolean = false;



  constructor(private postsService: PostsService, private authService: AuthService) {

  }

  ngOnInit() { 
    this.onGetData();

    
  }

  onLogin(postData: any){
    this.postsService.createAndStorePost(postData);
  }

  onGetData() {
    this.authService.GetData();
  }

  onViewData() {
    this.data = this.authService.Data;
    console.log(this.data);
    this.isDataShow = true;

  }




}

  






