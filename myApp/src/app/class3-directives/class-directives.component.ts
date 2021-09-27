import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-directives',
  templateUrl: './class-directives.component.html',
  styleUrls: ['./class-directives.component.css'],
})
export class ClassDirectivesComponent {
  box = true;
  age = 3;
  products = [
    {
      name: 'nokia',
      price: '300',
    },
    {
      name: 'samung',
      price: '400',
    },
    {
      name: 'lg',
      price: '500',
    },
    {
      name: 'moto',
      price: '600',
    },
  ];

  showHide() {
    if (this.box) {
      this.box = false;
    } else {
      this.box = true;
    }
  }
}
