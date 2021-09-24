import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-databinding',
  templateUrl: './class-databinding.component.html',
  styleUrls: ['./class-databinding.component.css'],
})
export class ClassDatabindingComponent {
  title = 'myApp';

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
