///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {DishService} from '../../dishes/services/dish.service';
import {DishC} from '../models/dish-component.model';
import {Product} from '../../products/models/product.model';
import {Dish} from '../../dishes/models/dish.model';

@Component({
  selector: 'app-dish-component',
  templateUrl: './dish-components.component.html',
  styleUrls: ['./dish-components.component.scss']
})
export class DishComponentsComponent {
  @Input() set dishId(dishId: number) {
    if (dishId) {
      this.getProductFromDish(dishId);
    }
  }

  dishesComponent: DishC[];

  constructor(private dishService: DishService, private cdRef: ChangeDetectorRef) {
  }

  getProductFromDish(id) {
    this.dishService.getProductsFromDish(id).subscribe(products => {
      this.dishesComponent = products;
      this.cdRef.markForCheck();
    });
  }
}
