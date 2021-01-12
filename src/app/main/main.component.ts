import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'task-day3';
  isTableShow: boolean = false;
  intro: string = 'Hello, this is my task!';
  description: string = 'I learnt on Pipe at Jan 2021.';
  today: Date = new Date();
  filteredStatus = ' ';


  onShowTable() {
    this.isTableShow = true;
  }
  

}


