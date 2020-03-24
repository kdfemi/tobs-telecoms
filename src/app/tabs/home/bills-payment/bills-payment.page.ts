import { Component, OnInit } from '@angular/core';
import {billServicesObject } from 'src/app/shared/common-object';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bills-payment',
  templateUrl: './bills-payment.page.html',
  styleUrls: ['./bills-payment.page.scss'],
})
export class BillsPaymentPage implements OnInit {

  billServices = billServicesObject;

  constructor(
    private navCtrl: NavController,

  ) { }

  ngOnInit() {

  }

  gotoService(url: string) {
    this.navCtrl.navigateForward(['bills-payment', 'payment', url]);
    console.log(url);
  }

}

