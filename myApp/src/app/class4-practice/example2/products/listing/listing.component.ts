import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  @Input('dbProducts') dbProducts: { pname: string; price: number }[] = [];
  constructor() {}

  ngOnInit(): void {}
}
