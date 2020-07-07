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
  providers: [ FontNameManagerService, ProductTypeManagerService ]
})
export class CreateOrderComponent implements OnInit {
  fontPicked = false;
  nameFontSizePicked = false;
  nameProductType: ProductType;
  font: FontName;
  fonts: FontName[];

  constructor(private fontService: FontNameManagerService, public productTypeService: ProductTypeManagerService) { 
    this.font = fontService.selectedFont
  }

  getFonts(){
    this.fontService.getFonts().subscribe(data => {
      this.fonts = data;
    });
  }

  onFormSubmit(form: NgForm) {
  }

  ngOnInit(): void {
    this.getFonts();
  }

  onFontChange(){
    this.fontPicked = this.font != undefined;
    this.fontService.selectedFontChange.next(this.font);
    console.log('Font change: ' + this.font?.id);
  }

  onNameSizeChange() {
    this.nameFontSizePicked = this.nameProductType != undefined;
    console.log('Name size change: ' + this.nameProductType?.id);
  }

}
