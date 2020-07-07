import {InMemoryDbService} from 'angular-in-memory-web-api';
import {FontName} from './Models/font-name';
import {ProductType} from './Models/product-type';

export class DbData implements InMemoryDbService{
  createDb(){
    const fontNames: FontName[]=[
      {id: 1, name:'Brasil'},
      {id: 2, name:'Romano'},
      {id: 3, name:'Czcionka 3'},
      {id: 4, name:'Czcionka 4'},
      {id: 5, name:'Czcionka 5'}
    ];
    const productTypes: ProductType[]=[
      {id: 23, size: 6, fontNameId: 1, signType: 1, restockMinAmount: 20},
      {id: 24, size: 5, fontNameId: 1, signType: 1, restockMinAmount: 20},
      {id: 25, size: 4, fontNameId: 1, signType: 1, restockMinAmount: 20},
      {id: 26, size: 4, fontNameId: 1, signType: 2, restockMinAmount: 20},
      {id: 27, size: 4, fontNameId: 1, signType: 4, restockMinAmount: 20},
      {id: 28, size: 3, fontNameId: 1, signType: 2, restockMinAmount: 20},
      {id: 29, size: 3, fontNameId: 1, signType: 4, restockMinAmount: 20},
      {id: 30, size: 6, fontNameId: 2, signType: 1, restockMinAmount: 10},
      {id: 31, size: 5, fontNameId: 2, signType: 1, restockMinAmount: 15},
      {id: 32, size: 4, fontNameId: 2, signType: 1, restockMinAmount: 15},
      {id: 33, size: 4, fontNameId: 2, signType: 2, restockMinAmount: 20},
      {id: 34, size: 4, fontNameId: 2, signType: 4, restockMinAmount: 20},
      {id: 35, size: 3, fontNameId: 2, signType: 2, restockMinAmount: 20},
      {id: 36, size: 3, fontNameId: 2, signType: 4, restockMinAmount: 20},
      {id: 37, size: 3, fontNameId: 1, signType: 1, restockMinAmount: 5},
    ];
    return {fontNames, productTypes};
  }
}
