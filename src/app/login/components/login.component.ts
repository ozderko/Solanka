import {Component, EventEmitter, Input} from '@angular/core';
import {Output} from '@angular/compiler/src/core';
import {Product} from '../../products/models/product.model';
import {ProductComponent} from '../../products/container/product.component';
import {LoginService} from '../service/login.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLogin = 'false';
  username = 'alexoff';
  password = '1111';

  constructor(public router: Router, private login: LoginService) {
    this.login.onLogin.subscribe(result => this.isLogin = result);
  }
  logg(username: string, password: string) {
    if (this.username === username && this.password === password) {
     this.login.logined();
     this.router.navigate(['']);
    }
  }
}
