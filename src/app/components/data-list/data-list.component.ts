import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  data_id: any; 
  data_phoneNumber: any; 
  data_fullName: any; 
  data_nickname: any; 
  data_gender: any; 
  data_isActive: any; 
  data_lastLoginDate: any; 
  data_registeredDate: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.ShowData();
    this.data_id = this.authService.data_id;
    this.data_phoneNumber = this.authService.data_phoneNumber;
    this.data_fullName = this.authService.data_fullName;
    this.data_nickname = this.authService.data_nickname;
    this.data_gender = this.authService.data_gender;
    this.data_isActive = this.authService.data_isActive;
    this.data_lastLoginDate = this.authService.data_lastLoginDate;
    this.data_registeredDate = this.authService.data_registeredDate;    
  }
}


