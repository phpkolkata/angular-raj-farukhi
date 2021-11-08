import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  name = 'suman';
  myDate = new Date(2019, 1, 3);
  data = { name: 'raj', age: 12 };
  desc = 'hello this is my description';
  filterargs = { name: 'raj' };
  items = [{ name: 'suamn' }, { name: 'raj' }, { name: 'Pradip' }];

  status = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });

  constructor() {}

  ngOnInit(): void {}
}
