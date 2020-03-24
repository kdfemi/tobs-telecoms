import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillsPaymentPageRoutingModule } from './bills-payment-routing.module';

import { BillsPaymentPage } from './bills-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillsPaymentPageRoutingModule
  ],
  declarations: [BillsPaymentPage]
})
export class BillsPaymentPageModule {}
