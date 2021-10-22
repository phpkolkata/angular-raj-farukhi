import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  mySubscription!: Subscription;
  constructor() {}

  // sync / async

  // Observables - can be thought of a data source, which works asyncronously
  ngOnInit(): void {
    this.mySubscription = interval(1000)
      .pipe(
        take(10),
        map((num) => {
          return num * 10;
        }),
        filter((num) => {
          return num == 50;
        })
      )
      .subscribe((num) => {
        console.log('myNumber', num);
      });
  }

  ngOnDestroy() {
    // this.mySubscription.unsubscribe();
  }
}
