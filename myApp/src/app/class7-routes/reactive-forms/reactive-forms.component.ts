import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  // FormGroup, FormGroupName,FormControlName
  myForm!: FormGroup;
  gender = ['male', 'female', 'other'];
  forbiddenNames = ['asif', 'raj'];

  constructor() {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      nm1: new FormControl('raj', [
        Validators.required,
        Validators.maxLength(5),
        this.forbiddenName.bind(this),
      ]),
      nm2: new FormControl('raj', Validators.required),
      email: new FormControl('', [Validators.required], this.forbiddenEmail),
      age: new FormControl('12', Validators.max(20)),
      gender: new FormControl('female'),
      hobbies: new FormArray([]),
      shipping_details: new FormGroup({
        address: new FormControl('test'),
        pin: new FormControl('asdf'),
      }),
    });

    // observable to receive value changes to the form
    this.myForm.valueChanges.subscribe((data) => {
      console.log('value', data);
    });
    // observable to reciev form status valid or invalid
    this.myForm.statusChanges.subscribe((data) => {
      console.log('status', data);
    });
    // observable to reciev any field status valid or invalid
    this.myForm.get('email')?.statusChanges.subscribe((data) => {
      console.log('emailstatus', data);
    });
  }

  forbiddenName(control: FormControl): { [key: string]: boolean } | null {
    if (this.forbiddenNames.indexOf(control.value) !== -1) {
      return { forbiddenName: true };
    } else {
      return null; // alwasy return null, not false;
    }

    // if (control.value == 'raj') {
    //   return { forbiddenName: true };
    // } else {
    //   return null;
    // }
  }

  forbiddenEmail(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const promise = new Promise<ValidationErrors | null>((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'test') {
          resolve({ forbiddenEmail: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
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
