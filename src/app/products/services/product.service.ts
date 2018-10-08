import {EventEmitter, Injectable} from '@angular/core';
import {HttpWrapper} from '../../wrappers/http-wrapper';
import {Product} from '../models/product.model';
import {map} from 'rxjs/internal/operators';

@Injectable()

export class ProductService {
  search = ''
  onSearchstr: EventEmitter<string> = new EventEmitter();

  searchGet() {
    this.onSearchstr.emit(this.search);
  }

  constructor(private httpWrapper: HttpWrapper) {
  }

  public add(product: Product) {
    return this.httpWrapper.post('/products', product).pipe(map(json => {
      return new Product(json);
    }));
  }

  public get() {
    return this.httpWrapper.get('/products').pipe(map((products: Array<any>) =>
      products.map(product => new Product(product)))
    );
  }
 public getOne(id: number) {
    return this.httpWrapper.get(`/products/${id}`).pipe(map(json => new Product(json)));
 }
  public delete(id: number) {
    return this.httpWrapper.delete(`/products/${id}`).pipe(map(json => {
      return new Product(json);
    }));
  }
}
