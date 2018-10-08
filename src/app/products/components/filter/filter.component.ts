import { Component } from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  product: Product[];
  searchStr = '';
  constructor(private productService: ProductService) {
    this.productService.get().subscribe(result => this.product = result);
    console.log(this.productService.onSearchstr.subscribe(result =>  this.searchStr = result));
  }

}
