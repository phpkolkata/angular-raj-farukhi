import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  go() {
    this.router.navigate(['page2']);
  }
}
