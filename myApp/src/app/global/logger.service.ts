import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  sayHello() {
    console.log('hello');
  }

  sayBye() {
    console.log('bye');
  }

  // addProduct
}
