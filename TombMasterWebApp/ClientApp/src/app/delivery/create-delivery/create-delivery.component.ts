import { Component, OnInit } from '@angular/core';
import { FontNameManagerService } from 'src/app/Services/font-name-manager.service';
import { ProductTypeManagerService } from 'src/app/Services/product-type-manager.service';
import { FontName } from 'src/app/Models/font-name';
import { ProductType } from 'src/app/Models/product-type';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.scss'],
  providers: [FontNameManagerService, ProductTypeManagerService]
})
export class CreateDeliveryComponent implements OnInit {

  fontDataRetrieved = false;
  fonts: FontName[];
  productTypesForSize: [number, ProductType[]][] = [];
  productTypeRetrived = false;

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['Znak', 'Ilość na magazynie', 'Minimalna ilość na magazynie', 'Ilość w dostawie'];

  constructor(public fontService: FontNameManagerService, public productTypeService: ProductTypeManagerService) { }

  ngOnInit(): void {
    this.fontService.getFonts().subscribe(data => {
      console.log("retrieving");
      this.fonts = data;
      this.fontDataRetrieved = true;
    });
  }

  onFormSubmit(form: NgForm) {
  }


  fontChanged(newVal){
    console.log(newVal);
  }

  onFontChange(): void {
    console.log(this.fontService.font);
    this.productTypeRetrived = false;
    this.productTypeService.getProductTypesAsync().then(() => {
      this.productTypesForSize = this.productTypeService.productTypesForSize;
      this.productTypeRetrived = true;
    },() => {
      this.productTypesForSize = null;
      this.productTypeRetrived = false;
    })
  }

}
