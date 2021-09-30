import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public pname = '';
  public price = 0;

  @Output() onProductAdded = new EventEmitter<{
    pname: string;
    price: number;
  }>();

  constructor() {}

  ngOnInit(): void {}

  addProduct() {
    this.onProductAdded.emit({ pname: this.pname, price: this.price });
  }
}
