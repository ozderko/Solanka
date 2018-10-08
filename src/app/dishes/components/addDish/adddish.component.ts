import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Dish} from '../../models/dish.model';
import {DishService} from '../../services/dish.service';
import {Product} from '../../../products/models/product.model';
import {ProductService} from '../../../products/services/product.service';


@Component({
  selector: 'app-adddish',
  templateUrl: './adddish.component.html',
  styleUrls: ['./adddish.component.scss']
})
export class AddDishComponent {
  @Output() onAdd: EventEmitter<Dish> = new EventEmitter<Dish>();

  public add(value: string, recipe: string, description: string) {
    this.onAdd.emit(new Dish({name: value, recipe: recipe, description: description}));
  }
}
