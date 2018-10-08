import {ChangeDetectorRef, Component, EventEmitter, Input} from '@angular/core';
import {Product} from '../models/product.model';
import {ProductService} from '../services/product.service';
import {LoginComponent} from '../../login/components/login.component';
import {Output} from '@angular/compiler/src/core';
import {logging} from 'selenium-webdriver';
import {LoginService} from '../../login/service/login.service';
import {MatDialog} from '@angular/material';
import {HelpComponent} from '../components/help/help.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {

  public products: Product[] = [];
  public isLogin;
  public searchStr = '';

  constructor(private productService: ProductService, private login: LoginService, public dialog: MatDialog, private cdRef: ChangeDetectorRef) {
    this.productService.get().subscribe(result => {
      this.products = result;
      this.cdRef.markForCheck();
      console.log(this.products);
    });
    this.login.onLogin.subscribe(result => this.isLogin = result);
    this.isLogin = this.login.getBool();
    console.log(this.productService.onSearchstr.subscribe(result => this.searchStr = result));
  }

  public openModal() {
    this.dialog.open(HelpComponent);
  }

  getName(product: Product): string {
    return `${product.name}`;
  }

  add(product: Product): void {
    this.productService.add(product).subscribe((result: Product) => {
      this.products.push(result);
    });
  }

  delete(id: number): void {
    this.productService.delete(id).subscribe((result: Product) => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }
}
