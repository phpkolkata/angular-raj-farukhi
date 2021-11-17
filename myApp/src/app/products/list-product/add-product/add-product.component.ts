import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  nm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onAdd() {
    this.http
      .post('http://127.0.0.1:8000/api/products', {
        nm: this.nm,
        is_active: 'y',
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
