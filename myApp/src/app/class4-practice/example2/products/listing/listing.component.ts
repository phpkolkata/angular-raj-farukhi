import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnChanges {
  @Input('dbProducts') dbProducts: { pname: string; price: number }[] = [];
  constructor() {}

  ngOnChanges() {
    console.log('input data changed');
  }
}
