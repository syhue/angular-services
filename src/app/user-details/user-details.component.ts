import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableService} from '../../app/shared/services/table.services';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [TableService],
})
export class UserDetailsComponent implements OnInit {

  User: any[];
  id: number;
  UserDetails;
  

  constructor(private route: ActivatedRoute,
    private TableService: TableService,) { 
    
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
    this.id = +params['id']; 
    this.User = this.TableService.getEvents() ;//how to call the details from table?
    this.User.filter( item => item.id === this.id);
    this.UserDetails= this.User[this.id-1];
  });
  
}

}


