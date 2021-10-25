import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-td-forms',
  templateUrl: './td-forms.component.html',
  styleUrls: ['./td-forms.component.css'],
})
export class TdFormsComponent implements OnInit {
  @ViewChild('frm') frm!: Form;

  constructor() {}

  ngOnInit(): void {}

  // onSubmit(frm: Form) {
  //   console.log(frm);
  // }

  onSubmit() {
    console.log(this.frm);
  }
}
