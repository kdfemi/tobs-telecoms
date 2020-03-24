import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyAirtimeOrDataPage } from './buy-airtime-or-data.page';

const routes: Routes = [
  {
    path: '',
    component: BuyAirtimeOrDataPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyAirtimePageRoutingModule {}
