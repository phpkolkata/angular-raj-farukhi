import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from '../../global/model/products.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  dbProducts!: Observable<any[]>;

  constructor(private http: HttpClient) {
    http.get('http://127.0.0.1:8000/api/products').subscribe((res: any) => {
      console.log(res);
      // console.log(typeof res);
      // this.dbProducts.push(res);
      this.dbProducts = of(res);
      // localStorage.setItem('login', 'true');
    });
  }

  ngOnInit(): void {}
}
