import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-class5-view-child',
  templateUrl: './class5-view-child.component.html',
  styleUrls: ['./class5-view-child.component.css'],
})
export class Class5ViewChildComponent implements OnInit {
  @ViewChild('nm') nm: any;

  constructor() {}

  ngOnInit(): void {}

  getName(nm: HTMLInputElement) {
    console.log('your name is ', nm.value);
  }

  getMyName() {
    console.log('your name is ');
  }
}
