import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFontComponent } from './font/create-font/create-font.component';
import { CreateOrderComponent } from './order/create-order/create-order.component';
import { HistoryOrderComponent } from './order/history-order/history-order.component';
import { CreateDeliveryComponent } from './delivery/create-delivery/create-delivery.component';
import { HistoryDeliveryComponent } from './delivery/history-delivery/history-delivery.component';
import { SummaryOrderComponent } from './order/summary-order/summary-order.component';
import { SummaryDeliveryComponent } from './delivery/summary-delivery/summary-delivery.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'create-font', component: CreateFontComponent },
  { path: 'create-order', component: CreateOrderComponent },
  { path: 'history-order', component: HistoryOrderComponent },
  { path: 'summary-order:id', component: SummaryOrderComponent },
  { path: 'create-delivery', component: CreateDeliveryComponent },
  { path: 'history-delivery', component: HistoryDeliveryComponent },
  { path: 'summary-delivery:id', component: SummaryDeliveryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
