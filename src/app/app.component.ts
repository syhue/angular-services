import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Tasks';
  isTableShow: boolean = false;
  intro: string = 'Hello, this is my task!';
  description: string = 'I learnt on Pipe at Jan 2021.';
  today: Date = new Date();
  filteredStatus = ' ';


  onShowTable() {
    this.isTableShow = true;
  }
  
}
