import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { PostsService } from '../../shared/services/posts.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


const newLocal = "DeviceType";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {


  link: any = ['/main'];
  data: any;
  error: string;
  showFormError: boolean = false; 
  form: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router, private postsService: PostsService, private authService: AuthService) { }
  
  ngOnInit( ) {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    })
  }

  onLogin(postData: any){
    this.showFormError = false;
    this.postsService.login(postData)
    .subscribe(
      data => {
        console.log(data);
        this.showFormError = false;
        this.authService.GetData();
        this.router.navigate(['data-list']);
      },
      error => {
        this.error = error.error.errors.account; 
        console.log(this.error);
        
      }
    )

    if (this.form.invalid) {
      this.showFormError = true;
    } 

  }
}

  






