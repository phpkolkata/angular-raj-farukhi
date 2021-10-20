import { Component, OnInit } from '@angular/core';
import { AuthService } from '../global/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public srvAuth: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.srvAuth.makeLogin();
    console.log(this.srvAuth.isLogin);
  }

  logout() {
    this.srvAuth.makeLogout();
    console.log(this.srvAuth.isLogin);
  }
}
