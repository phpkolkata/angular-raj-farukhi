import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public products: { pname: string; price: number }[] = [];
  constructor() {}

  ngOnInit(): void {}

  saveProduct(data: any) {
    console.log('saving', data);
    this.products.push({ pname: data.pname, price: data.price });
  }
}
