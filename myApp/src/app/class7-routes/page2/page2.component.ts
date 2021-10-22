import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit, OnDestroy {
  urlId!: number;
  urlSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // snapshot way
    // this.urlId = this.route.snapshot.params['id'];

    // observable way
    this.urlSubscription = this.route.params.subscribe((data) => {
      console.log('data', data);
      this.urlId = data.id;
    });
  }

  next() {
    this.router.navigate(['page2', '33']);
  }

  ngOnDestroy() {
    this.urlSubscription.unsubscribe();
  }
}
