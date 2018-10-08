import {Injectable} from '@angular/core';
import {HttpWrapper} from '../../wrappers/http-wrapper';
import {Dish} from '../models/dish.model';
import {map} from 'rxjs/internal/operators';
import {DishC} from '../../dish-components/models/dish-component.model';
import {Observable} from 'rxjs';

@Injectable()
export class DishService {
  constructor(private httpWrapper: HttpWrapper) {
  }

  public add(dish: Dish) {
    return this.httpWrapper.post('/dishes', dish).pipe(map(json => {
      return new Dish(json);
    }));
  }

  public get() {
    return this.httpWrapper.get('/dishes').pipe(map((dishes: Array<any>) =>
      dishes.map(dish => new Dish(dish)))
    );
  }

  public delete(id: number) {
    return this.httpWrapper.delete(`/dishes/${id}`).pipe(map(json => {
      return new Dish(json);
    }));
  }
  public addProductToDish(dishId: number, productId: number, dishComponent: DishC) {
    return this.httpWrapper.post(`/components/${dishId}/${productId}`, dishComponent).pipe(map(json => {
      return new DishC(json);
    }));
  }
  public getProductsFromDish(dishId: number): Observable<DishC[]> {
    return this.httpWrapper.get(`/components/${dishId}`).pipe(map((products: Array<any>) =>
      products.map(product => new DishC(product))
    ));
  }
}
