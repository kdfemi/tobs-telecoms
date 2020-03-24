import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'buy-airtime-or-data/:type',
    loadChildren: () => import('./tabs/home/buy-airtime-or-data/buy-airtime-or-data.module').then( m => m.BuyAirtimeOrDataPageModule)
  },
  {
    path: 'bills-payment',
    loadChildren: () => import('./tabs/home/bills-payment/bills-payment.module').then( m => m.BillsPaymentPageModule)
  },
  {
    path: 'fund-wallet',
    loadChildren: () => import('./tabs/home/fund-wallet/fund-wallet.module').then( m => m.FundWalletPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
