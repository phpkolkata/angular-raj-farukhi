import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin = false;

  constructor() {}

  makeLogin() {
    this.isLogin = true;
  }

  makeLogout() {
    this.isLogin = false;
  }

  checkLogin() {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        console.log(this.isLogin, 'check login');
        resolve(this.isLogin);
      }, 1000);
    });

    return promise;
  }
}
