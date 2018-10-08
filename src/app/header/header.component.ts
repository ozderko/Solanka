import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLogin;
  headerlogin: string;

  constructor(public router: Router, private auth: LoginService) {
    this.auth.onLogin.subscribe(result => this.isLogin = result);
    this.isLogin = auth.getBool();
  }

  public logo() {
    this.router.navigate(['']);
  }

  public dishes() {
    this.router.navigate(['/dishes']);
  }

  public login() {
    if (this.isLogin === false) {
      this.router.navigate(['/login']);
    }
    if (this.isLogin === true) {
      this.auth.logout();
    }
  }

  public headerLogin() {
    if (this.isLogin) {
      return this.headerlogin = 'LogOut';
    } else {
      return this.headerlogin = 'LogIn';
    }
  }
}


