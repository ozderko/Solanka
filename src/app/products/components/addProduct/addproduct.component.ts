import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';
import {LoginComponent} from '../../../login/components/login.component';



@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss', ]
})
export class AddProductComponent {
  @Output() onAdd: EventEmitter<Product> = new EventEmitter<Product>();


  public add(value: string, isEssential: boolean) {
    this.onAdd.emit(new Product({name: value, isEssential: isEssential}));
  }
}
