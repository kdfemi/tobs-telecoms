import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GetValueFromObject, billServicesObject, BillsService} from '../../../../shared/common-object';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  dummyoptions = ['dummy1', 'dummy2', 'dummy3', 'dummy4', 'dummy5', 'dummy6', 'dummy7'];
  type: string;
  serviceName: string;
  payBillsForm: FormGroup;
  inputFormObject: BillsFormStructure = {};
  billServiceEnum = BillsService;
  isloading = false;

  constructor(
    private route: ActivatedRoute,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((url) => {
      console.log('SWEET IN THE MIDDLE');
      if (url.has('service')) {
        this.type = url.get('service');

        this.serviceName = GetValueFromObject(billServicesObject, 'url', this.type).name;
        if (this.type === BillsService.DSTV || this.type === BillsService.SMILEDATA) {

          this.inputFormObject.package = new FormControl(null, [Validators.required]);
          this.inputFormObject.plan = new FormControl(null, [Validators.required]);
          this.inputFormObject.customerNo = new FormControl(null, [Validators.pattern('^[0-9]+$'), Validators.required]);

          if (this.type === BillsService.SMILEDATA) {

            this.inputFormObject.customerNo.setValidators(
              [Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]+$'), Validators.required]);

          }

        } else if (this.type === BillsService.GOTV || this.type === BillsService.STARTIMES) {

          this.inputFormObject.plan = new FormControl(null, [Validators.required]);
          this.inputFormObject.customerNo = new FormControl(null, [Validators.pattern('^[0-9]+$'), Validators.required]);

        } else if (this.type === BillsService.SPECTRANET) {

          this.inputFormObject.package = new FormControl(null, [Validators.required]);

        } else if (this.type === BillsService.SMILERECHARGE) {

          this.inputFormObject.amount = new FormControl(null, [Validators.required]);
          this.inputFormObject.customerNo = new FormControl(null, [Validators.pattern('^[0-9]+$'), Validators.required]);

        } else if (this.type === BillsService.WAECRESULT || this.type === BillsService.NECORESULT) {

          this.inputFormObject.quantity = new FormControl(null, [Validators.required]);

        } else if (this.type === BillsService.ELECTRICITY) {

          this.inputFormObject.package = new FormControl(null, [Validators.required]);
          this.inputFormObject.amount = new FormControl(null, [Validators.required]);
          this.inputFormObject.customerNo = new FormControl(null, [Validators.required]);

        }
        this.payBillsForm = new FormGroup(this.inputFormObject);
      } else {
        console.log('error');
      }
    });
  }

  async completeBillPayment() {

    if (this.type === BillsService.DSTV || this.type === BillsService.SMILEDATA) {

    } else if (this.type === BillsService.GOTV || this.type === BillsService.STARTIMES) {

    } else if (this.type === BillsService.SPECTRANET) {


    } else if (this.type === BillsService.SMILERECHARGE) {


    } else if (this.type === BillsService.WAECRESULT || this.type === BillsService.NECORESULT) {


    } else if (this.type === BillsService.ELECTRICITY) {

    }
    if (this.type !== BillsService.SPECTRANET) {
      await this.presentModal({service: 'Dstv', 'Customre Resistered Name': 'Marlie', Number: 72345621, Price: 1000});
    }
  }

  private async presentModal(paymentinfo: {[key: string]: any}) {
    const modal = await this.modalCtrl.create({
    component: ConfirmationComponent,
    componentProps: {paymentinfo}
    });
    await modal.present();
  }
}

export interface BillsFormStructure {
  [key: string]: AbstractControl;
  package?: AbstractControl;
  plan?: AbstractControl;
  customerNo?: AbstractControl;
  amount?: AbstractControl;
  quantity?: AbstractControl;
}
