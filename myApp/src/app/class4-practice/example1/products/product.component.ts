import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public pname = '';
  public price = 0;
  public products: { pname: string; price: number }[] = [];

  constructor() {}

  ngOnInit(): void {}

  addProduct() {
    const product = { pname: this.pname, price: this.price };
    this.products.push(product);
  }
}
