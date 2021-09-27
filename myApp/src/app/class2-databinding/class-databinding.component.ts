import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-databinding',
  templateUrl: './class-databinding.component.html',
  styleUrls: ['./class-databinding.component.css'],
})
export class ClassDatabindingComponent {
  title = 'myApp';
  allowClick = false;
  myText = 'hello world';

  constructor() {
    setTimeout(() => {
      this.allowClick = true;
    }, 2000);
  }

  getTitle() {
    return 'my Page title';
  }

  onPressButton() {
    this.title = 'button clicked';
    console.log('clicked');
  }

  showData(event: Event) {
    this.title = (<HTMLInputElement>event.target).value;
  }
}
