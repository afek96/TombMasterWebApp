import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms'

import { FontSize } from '../../font-size'

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  nameFontSizePicked = false;
  nameFontSize = new FontSize(0,0);

  fonts = [
    { id: '1', name: 'Czcionka 1' },
    { id: '2', name: 'Czcionka 2' },
    { id: '3', name: 'Czcionka 3' },
  ];

  fontSizes = [
    new FontSize( 1, 4 ),
    new FontSize( 2, 5 ),
    new FontSize( 3, 6 ),
  ];

  constructor() { }

  onFormSubmit(form: NgForm) {
  }

  ngOnInit(): void {
  }

  onNameSizeChange() {
    this.nameFontSizePicked = this.nameFontSize.id != 0;
    console.log('Name size change: '+ this.nameFontSize.id);
 }

}
