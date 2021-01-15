import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  Data: any;
  data_id: any; 
  data_phoneNumber: any; 
  data_fullName: any; 
  data_nickname: any; 
  data_gender: any; 
  data_isActive: any; 
  data_lastLoginDate: any; 
  data_registeredDate: any;

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
   
    this.authService.GetData()
    .subscribe((responseData: any) => {
      
      this.Data = responseData;
      this.data_id = this.Data["id"];
      this.data_phoneNumber = this.Data["phoneNumber"];
      this.data_fullName =  this.Data["fullName"];
      this.data_nickname =  this.Data["nickname"];
      this.data_gender = this.Data["gender"];
      this.data_isActive = this.Data["isActive"];
      this.data_lastLoginDate = this.Data["lastLoginDate"];
      this.data_registeredDate = this.Data["registeredDate"];
       
  })
}

}

