import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms'

import { Font } from '../../font'
import { FontSize } from '../../font-size'

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  fontPicked = false;
  nameFontSizePicked = false;
  nameFontSize: FontSize;
  font: Font;

  fonts = [
    new Font(1, 'Czcionka 1'),
    new Font(2, 'Czcionka 2'),
    new Font(3, 'Czcionka 3'),
  ];

  //TODO dictionary na string,FontSize[] albo inny sposób na przechowywanie

  //fontSizes = [
  //  new FontSize(1, 4),
  //  new FontSize(2, 5),
  //  new FontSize(3, 6),
  //];

  constructor() { }

  onFormSubmit(form: NgForm) {
  }

  ngOnInit(): void {
  }

  onFontChange(){
    this.fontPicked = this.font != undefined;
    console.log('Font change: ' + this.font?.id);
  }

  onNameSizeChange() {
    this.nameFontSizePicked = this.nameFontSize != undefined;
    console.log('Name size change: ' + this.nameFontSize?.id);
  }

}
