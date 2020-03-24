import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  fundWalletUrl = 'fund-wallet';
  menus = [
    { title: 'Buy Data', icon: 'phone-portrait-outline', url: '/buy-airtime-or-data/data'},
    { title: 'Buy Airtime', icon: '/assets/icon/out-call.svg', url: '/buy-airtime-or-data/airtime'},
    { title: 'Pay Bills', icon: '/assets/icon/invoice.svg', url: '/bills-payment'},
    { title: 'Fund Wallet', icon: '/assets/icon/wallet.svg', url: this.fundWalletUrl},
    { title: 'Transfer Funds', icon: '/assets/icon/transfer.svg', url: '5'},
    { title: 'Withdraw Funds', icon: '/assets/icon/withdraw.svg', url: '6'}
  ];
  constructor(
    private navCtrl: NavController
  ) {}

  gotoPage(url: string) {
    this.navCtrl.navigateForward(url);
    console.log(url);
  }

}
