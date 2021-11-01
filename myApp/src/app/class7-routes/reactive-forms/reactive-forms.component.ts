import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  // FormGroup, FormGroupName,FormControlName
  myForm!: FormGroup;
  gender = ['male', 'female', 'other'];
  constructor() {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      nm: new FormControl('raj'),
      age: new FormControl('12'),
    });
  }

  onSubmit() {
    console.log(this.myForm);
  }
}
