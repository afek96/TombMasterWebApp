import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CreateFontComponent } from './font/create-font/create-font.component';
import { CreateOrderComponent } from './order/create-order/create-order.component';
import { SummaryOrderComponent } from './order/summary-order/summary-order.component';
import { HistoryOrderComponent } from './order/history-order/history-order.component';
import { HistoryDeliveryComponent } from './delivery/history-delivery/history-delivery.component';
import { CreateDeliveryComponent } from './delivery/create-delivery/create-delivery.component';
import { SummaryDeliveryComponent } from './delivery/summary-delivery/summary-delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CreateFontComponent,
    CreateOrderComponent,
    SummaryOrderComponent,
    HistoryOrderComponent,
    HistoryDeliveryComponent,
    CreateDeliveryComponent,
    SummaryDeliveryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'create-font', component: CreateFontComponent },
      { path: 'create-order', component: CreateOrderComponent },
      { path: 'history-order', component: HistoryOrderComponent },
      { path: 'summary-order', component: SummaryOrderComponent },
      { path: 'create-delivery', component: CreateDeliveryComponent },
      { path: 'history-delivery', component: HistoryDeliveryComponent },
      { path: 'summary-delivery', component: SummaryDeliveryComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
