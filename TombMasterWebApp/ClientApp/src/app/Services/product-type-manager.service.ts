import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { FontNameManagerService } from '../Services/font-name-manager.service'

import { ProductType } from '../Models/product-type';



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

  constructor(private http: HttpClient, private fontService: FontNameManagerService) { }

  getProductTypesAsync(): Promise<unknown> {
    var promise = new Promise((resolve, reject) => {
      this.productTypesForSignType = [];
      this.productTypesForSize = [];
      if (this.fontService.font == undefined) {
        reject();
        return;
      }

      this.getProductTypes().subscribe(data => {
        this.productTypes = data.filter(x => x.fontNameId == this.fontService.font.id);

        this.productTypes.map(x => x.size).filter((value, index, self) => self.indexOf(value) == index).forEach((value) => {
          this.productTypesForSize.push([value, this.productTypes.filter(x => x.size == value)]);
        });

        this.productTypes.map(x => x.signType).filter((value, index, self) => self.indexOf(value) == index).forEach((value) => {
          this.productTypesForSignType.push([value, this.productTypes.filter(x => x.signType == value)]);
        });
        resolve();
      });
    });
    return promise;
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
