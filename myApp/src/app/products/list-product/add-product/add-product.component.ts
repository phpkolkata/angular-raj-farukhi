import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DbService } from '../../../global/db.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  nm: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private srvDb: DbService
  ) {}

  ngOnInit(): void {}

  onAdd() {
    // this.http
    //   .post('http://127.0.0.1:8000/api/products', {
    //     nm: this.nm,
    //     is_active: 'y',
    //   })]
    this.srvDb
      .add('products', {
        nm: this.nm,
        is_active: 'y',
      })
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/products'], {
          queryParams: { refresh: new Date().getTime() },
        });
      });
  }
}
