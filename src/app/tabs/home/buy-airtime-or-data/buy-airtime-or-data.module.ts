import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyAirtimePageRoutingModule } from './buy-airtime-or-data-routing.module';

import { BuyAirtimeOrDataPage } from './buy-airtime-or-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyAirtimePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BuyAirtimeOrDataPage]
})
export class BuyAirtimeOrDataPageModule {}
