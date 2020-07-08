import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms'

import { FontNameManagerService } from '../../font-name-manager.service'
import { ProductTypeManagerService } from '../../product-type-manager.service'

import { FontName } from '../../Models/font-name'

import { ProductType } from '../../Models/product-type'

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
  providers: [FontNameManagerService, ProductTypeManagerService]
})
export class CreateOrderComponent implements OnInit {
  fontPicked = false;
  fontDataRetrieved = false;
  productTypeRetrived = false;
  nameFontSizePicked = false;
  nameProductType: ProductType;
  font: FontName;
  fonts: FontName[];
  productTypesForSignType: [number, ProductType[]][];

  constructor(private fontService: FontNameManagerService, public productTypeService: ProductTypeManagerService) {
    this.font = fontService.selectedFont;
  }

  getFonts() {
    this.fontService.getFonts().subscribe(data => {
      this.fonts = data;
      this.fontDataRetrieved = true;
    });
  }

  onFormSubmit(form: NgForm) {
  }

  ngOnInit(): void {
    this.getFonts();
  }

  onFontChange() {
    this.productTypeRetrived = false;
    this.fontPicked = this.font != undefined;
    this.fontService.selectedFontChange.next(this.font);
    this.productTypeService.getProductTypesAsync().then(() => {
      this.productTypesForSignType = this.productTypeService.productTypesForSignType;
      this.productTypeRetrived = true;
    },() => {
      this.productTypesForSignType = null;
      this.productTypeRetrived = false;
    })
  }
}
