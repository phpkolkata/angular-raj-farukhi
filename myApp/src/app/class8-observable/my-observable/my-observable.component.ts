import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-my-observable',
  templateUrl: './my-observable.component.html',
  styleUrls: ['./my-observable.component.css'],
})
export class MyObservableComponent implements OnInit, OnDestroy {
  obData$!: Observable<number>;
  mySubscription!: Subscription;

  constructor() {
    this.obData$ = new Observable<number>((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count); // sends data to subscriber
        // complete the observable
        if (count == 5) {
          observer.complete();
        }
        // --------------------
        count++;
      }, 1000);
    });
  }

  ngOnInit(): void {
    this.mySubscription = this.obData$.subscribe((num) => {
      console.log('myNum-', num);
    });
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
}
