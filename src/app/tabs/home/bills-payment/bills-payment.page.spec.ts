import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BillsPaymentPage } from './bills-payment.page';

describe('BillsPaymentPage', () => {
  let component: BillsPaymentPage;
  let fixture: ComponentFixture<BillsPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BillsPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
