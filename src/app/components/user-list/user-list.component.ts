import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  filtered: string = '';
  name: string; 
  gender: string;

  namelist = [
    { 
      name: 'Carole Tuter',
      gender: 'Female',
    },
    {
      name: 'Mitzie Buggie',
      gender: 'Male',
    },
    { 
      name: 'Winnie Darlene',
      gender: 'Female',
    },
    {
      name: 'Pinke Hoffhines',
      gender: 'Female',
    },
  ];
  
  

}
