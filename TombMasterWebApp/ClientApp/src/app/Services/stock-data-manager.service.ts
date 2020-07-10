import { Injectable } from '@angular/core';
import { ProductTypeManagerService } from './product-type-manager.service';

@Injectable(
  //{providedIn: 'root'}
)
export class StockDataManagerService {

  constructor(private productTypeService: ProductTypeManagerService) { }
}
