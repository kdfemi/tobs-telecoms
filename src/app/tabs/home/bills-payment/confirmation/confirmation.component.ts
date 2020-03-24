import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {

  @Input() paymentinfo: {[key: string]: any};
  paymentInfoKeys: string [];
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.paymentInfoKeys = Object.keys(this.paymentinfo);
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  submit() {}

}
