import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-airtime-or-data',
  templateUrl: './buy-airtime-or-data.page.html',
  styleUrls: ['./buy-airtime-or-data.page.scss']
})
export class BuyAirtimeOrDataPage implements OnInit {

  buyAirtimeForm: FormGroup;
  networks = ['Mtn', 'Glo', 'Airtel', '9mobile'];
  dataTypes = ['Standard', 'Premium'];
  dataRates = ['1gb', '1.5gb', '2gb', '3gb', '4.5gb'];
  isloading = false;
  type: string;

  @HostListener('keypress', ['$event']) handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.buyAirtimeForm.valid) {
      this.buyAirtime();
    }
  }

  constructor(
    private route: ActivatedRoute
  ) { }

  // TODO add extra quick load option
  ngOnInit() {
    this.route.paramMap.subscribe((url) => {
      if (url.has('type')) {
        this.type = url.get('type');
      } else {
        console.log('error');
      }
      if (this.type === 'airtime') {
        this.buyAirtimeForm = new FormGroup({
          network: new FormControl(null, [Validators.required]),
          phoneNumber: new FormControl(null, [Validators.required, Validators.pattern('^[+]?[0-9]+')]),
          amount: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')])
        });
      } else {
        this.buyAirtimeForm = new FormGroup({
          subscriptionType: new FormControl(null, [Validators.required]),
          network: new FormControl(null, [Validators.required]),
          phoneNumber: new FormControl(null, [Validators.required, Validators.pattern('^[+]?[0-9]+')]),
          dataRate: new FormControl(null, [Validators.required])
        });
      }
    });
  }

  buyAirtime() {
    if (this.buyAirtimeForm.valid) {
      if (this.type === 'airtime') {

      } else {

      }
      this.isloading = true;
      // Remove after
      setTimeout(() => {
        this.isloading = false;
      }, 3000);
    }
    console.log(this.buyAirtimeForm.value);
  }

  ionViewDidLeave() {
  //  cancel subscription here
  }
}
