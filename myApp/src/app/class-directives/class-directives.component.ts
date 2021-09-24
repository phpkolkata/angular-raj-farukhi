import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-directives',
  templateUrl: './class-directives.component.html',
  styleUrls: ['./class-directives.component.css'],
})
export class ClassDirectivesComponent {
  box = true;

  showHide() {
    if (this.box) {
      this.box = false;
    } else {
      this.box = true;
    }
  }
}
