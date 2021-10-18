import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css'],
})
export class Page4Component implements OnInit {
  queryData: any | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // snapshot way
    // this.queryData = this.route.snapshot.queryParams;
    // console.log(this.queryData);

    // observable way
    this.route.queryParams.subscribe((data) => {
      this.queryData = data;
      console.log(this.queryData);
    });
  }
}
