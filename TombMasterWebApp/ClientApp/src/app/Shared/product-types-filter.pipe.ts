import { Pipe, PipeTransform } from '@angular/core';
import { ProductType } from '../Models/product-type';

@Pipe({
  name: 'productTypesFilter'
})
export class ProductTypesFilterPipe implements PipeTransform {

  transform(items: [number, ProductType[]][], filter: number): ProductType[] {
    if (!items || !items.length || !filter)
      return null;

    return items[items.findIndex(x => x[0] == filter)][1];
  }

}
