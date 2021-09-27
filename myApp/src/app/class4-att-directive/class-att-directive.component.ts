import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-att-directive',
  templateUrl: './class-att-directive.component.html',
  styleUrls: ['./class-att-directive.component.css'],
})
export class ClassAttDirectiveComponent implements OnInit {
  red = false;
  isBox = false;

  constructor() {}

  ngOnInit(): void {}

  chColor(event: Event) {
    const clicked = (<HTMLInputElement>event.target).checked;
    if (clicked) {
      this.red = true;
    } else {
      this.red = false;
    }
  }

  chClass() {
    if (this.isBox) {
      this.isBox = false;
    } else {
      this.isBox = true;
    }
  }

  getColor() {
    return 'green';
  }
}
