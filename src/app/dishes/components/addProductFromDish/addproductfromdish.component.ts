import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Dish} from '../../models/dish.model';
import {DishC} from '../../../dish-components/models/dish-component.model';
import {DishService} from '../../services/dish.service';
import {Product} from '../../../products/models/product.model';
import {ProductService} from '../../../products/services/product.service';
import {LoginService} from '../../../login/service/login.service';
import {removeSummaryDuplicates} from '@angular/compiler';



@Component({
  selector: 'app-addproductfromdish',
  templateUrl: './addproductfromdish.component.html',
  styleUrls: ['./addproductfromdish.component.scss']
})
export class AddProductFromDishComponent {
  public products: Product[];
  public selectedProducts: Product[];
  public dishes: Dish[];
  public dishesComponent: DishC[];

  constructor(private productService: ProductService, private dishService: DishService, private auth: LoginService) {
    this.selectedProducts = [];
    this.productService.get().subscribe(result => this.products = result);
    this.dishService.get().subscribe(result => this.dishes = result);
  }

  selectProduct(value: string): void {
    const n: number = Number(value);
    if (!n || n === -1) {
      return;
    }
    const selected: Product = this.products.find((product: Product) => product.id === n);
    this.selectedProducts.push(selected);
    this.products = this.products.filter(product => product.id !== selected.id);
  }
  getNameDish(dish: Dish): string {
    return `${dish.name}`;
  }

  getNameProduct(product: Product): string {
    return `${product.name}`;
  }
  }

