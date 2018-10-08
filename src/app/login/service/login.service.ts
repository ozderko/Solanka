import {EventEmitter} from '@angular/core';

export class LoginService {
  private isLogined = true;
  onLogin: EventEmitter<boolean> = new EventEmitter();

  public logined() {
      this.isLogined = true;
      this.onLogin.emit(this.isLogined);
    }
    public logout() {
      this.isLogined = false;
      this.onLogin.emit(this.isLogined);
    }
    getBool() {
     return this.isLogined;
    }
  }
