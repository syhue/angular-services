import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableService, TableItem ,TableDataSource} from '../../app/shared/services/table.services';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [TableService],
})
export class UserDetailsComponent implements OnInit {

   id: number;

  constructor(private route: ActivatedRoute) { 
    
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
   });
    }
}


