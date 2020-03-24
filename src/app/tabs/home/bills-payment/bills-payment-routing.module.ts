import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillsPaymentPage } from './bills-payment.page';

const routes: Routes = [
  {
    path: '',
    component: BillsPaymentPage
  },
  {
    path: 'payment/:service',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillsPaymentPageRoutingModule {}
