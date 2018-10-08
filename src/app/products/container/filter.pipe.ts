import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'filterP'
})
export class FilterPipe implements PipeTransform {
  transform(products, value) {
    return products.filter(product => {
      return product.name.includes(value);
    });
  }
}
