import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit {
  urlId!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // snapshot way
    // this.urlId = this.route.snapshot.params['id'];
    this.route.params.subscribe((data) => {
      console.log('data', data);
      this.urlId = data.id;
    });
  }

  next() {
    this.router.navigate(['page2', '33']);
  }
}
