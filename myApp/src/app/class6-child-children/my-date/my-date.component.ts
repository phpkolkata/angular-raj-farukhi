import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-date',
  templateUrl: './my-date.component.html',
  styleUrls: ['./my-date.component.css'],
})
export class MyDateComponent implements OnInit {
  public today = new Date().toLocaleString().toString();

  constructor() {
    // console.log(this.today);
  }

  ngOnInit(): void {}

  setLog() {
    console.log('hi');
  }
}
