import {Component} from '@angular/core';
import {Dish} from '../models/dish.model';
import {DishService} from '../services/dish.service';
import {Product} from '../../products/models/product.model';
import {ProductService} from '../../products/services/product.service';
import {LoginService} from '../../login/service/login.service';
import { DishC } from '../../dish-components/models/dish-component.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent {
  public dishes: Dish[];
  public dishesComponent: DishC[];
  public product: Product;
  public isLogin;

  constructor(private dishService: DishService , private auth: LoginService) {
    this.dishService.get().subscribe(result => this.dishes = result);
    this.auth.onLogin.subscribe(result => this.isLogin = result);
    this.isLogin = this.auth.getBool();
  }


  getName(dish: Dish): string {
    return `${dish.name}`;
  }
  getRecipe(dish: Dish): string {
    return `${dish.recipe}`;
  }
  getDescription(dish: Dish): string {
    return `${dish.description}`;
  }
  add(dish: Dish): void {
    this.dishService.add(dish).subscribe((result: Dish) => {
      this.dishes.push(result);
    });
  }
  delete(id: number): void {
    this.dishService.delete(id).subscribe((result: Dish) => {
      this.dishes = this.dishes.filter(dish => dish.id !== id);
    });
  }
}
