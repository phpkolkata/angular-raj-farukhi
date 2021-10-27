import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-forms',
  templateUrl: './td-forms.component.html',
  styleUrls: ['./td-forms.component.css'],
})
export class TdFormsComponent implements OnInit {
  @ViewChild('frm') frm!: NgForm;
  genders = ['male', 'female'];

  myForm = {
    name: '',
    age: 0,
    email: '',
    gender: '',
    shpping_info: {
      address: '',
      pin: '',
    },
  };

  constructor() {}

  ngOnInit(): void {}

  // onSubmit(frm: Form) {
  //   console.log(frm);
  // }

  onSubmit() {
    console.log(this.frm);
  }

  onSetValue() {
    // console.log(this.frm.value);
    this.frm.setValue({
      uname: 'raj',
      age: 12,
      email: 'test',
      gender: 'male',
      shipping_info: {
        address: 'test address',
        pin: 'test pin',
      },
    });
  }

  onPatchValue() {
    // console.log(this.frm.value);
    this.frm.form.patchValue({
      uname: 'raj',
      shipping_info: {
        pin: 'mypin',
      },
    });
  }

  onGetValue() {
    this.myForm = this.frm.value;
  }
  onReset() {
    // this.frm.value.age ='';
    this.frm.reset();
  }
}
