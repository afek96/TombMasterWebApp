import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { FontNameManagerService } from './font-name-manager.service'

import { ProductType } from './Models/product-type';



@Injectable(
  //{providedIn: 'root'}
)
export class ProductTypeManagerService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  private apiUrl = 'api/productTypes';

  httpOptions = {
    headers: this.headers
  };

  private productTypes: ProductType[];

  productTypesForSignType: [number, ProductType[]][] = [];
  productTypesForSize: [number, ProductType[]][] = [];

  constructor(private http: HttpClient, private fontService: FontNameManagerService) {
    fontService.selectedFontChange.subscribe((value) => {

      this.productTypesForSignType = [];
      this.productTypesForSize = [];
      if(value == undefined){
        return;
      }

      this.getProductTypes().subscribe(data => {
        this.productTypes = data.filter(x=>x.fontNameId == value.id);

        this.productTypes.map(x=>x.size).filter((value, index, self) => self.indexOf(value) == index).forEach((value) => {
          this.productTypesForSize.push([value, this.productTypes.filter(x=>x.size == value)]);
          console.log(this.productTypesForSize);
        });
   
        this.productTypes.map(x=>x.signType).filter((value, index, self) => self.indexOf(value) == index).forEach((value) => {
          this.productTypesForSignType.push([value, this.productTypes.filter(x=>x.signType == value)]);
        });
      });
    });
     
  }

  getProductTypes(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.apiUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

}
