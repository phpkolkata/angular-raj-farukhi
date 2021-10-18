import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'],
})
export class Page3Component implements OnInit {
  myFragment: null | string = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // console.log(this.route.snapshot.fragment);
    // this.myFragment = this.route.snapshot.fragment;

    this.route.fragment.subscribe((frg) => {
      this.myFragment = frg;
    });
  }
}
