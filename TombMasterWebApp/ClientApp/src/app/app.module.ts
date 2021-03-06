import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { Ng2CompleterModule } from 'ng2-completer';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFontComponent } from './font/create-font/create-font.component';
import { CreateOrderComponent } from './order/create-order/create-order.component';
import { SummaryOrderComponent } from './order/summary-order/summary-order.component';
import { HistoryOrderComponent } from './order/history-order/history-order.component';
import { HistoryDeliveryComponent } from './delivery/history-delivery/history-delivery.component';
import { SummaryDeliveryComponent } from './delivery/summary-delivery/summary-delivery.component';
import { CreateDeliveryComponent } from './delivery/create-delivery/create-delivery.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { DbData } from './db-data';
import { ArrayAtIndexPipe } from './Shared/array-at-index.pipe';
import { PluckPipe } from './Shared/pluck.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateFontComponent,
    CreateOrderComponent,
    SummaryOrderComponent,
    HistoryOrderComponent,
    HistoryDeliveryComponent,
    SummaryDeliveryComponent,
    CreateDeliveryComponent,
    NavMenuComponent,
    HomeComponent,
    ArrayAtIndexPipe,
    PluckPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    InMemoryWebApiModule.forRoot(DbData),
    HttpClientModule,
    Ng2CompleterModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
