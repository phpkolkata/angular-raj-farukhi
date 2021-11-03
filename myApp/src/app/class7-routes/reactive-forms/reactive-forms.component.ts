import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
      nm1: new FormControl('raj', Validators.required),
      nm2: new FormControl('raj', Validators.required),
      age: new FormControl('12', Validators.max(20)),
      gender: new FormControl('female'),
      hobbies: new FormArray([]),
      shipping_details: new FormGroup({
        address: new FormControl('test'),
        pin: new FormControl('asdf'),
      }),
    });
  }

  get hobbyArray() {
    return this.myForm.get('hobbies') as FormArray;
  }

  onSubmit() {
    console.log(this.myForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myForm.get('hobbies')).push(control);
  }
}
