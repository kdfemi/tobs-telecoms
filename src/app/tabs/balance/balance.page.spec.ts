import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { BalancePage } from './balance.page';

describe('Tab1Page', () => {
  let component: BalancePage;
  let fixture: ComponentFixture<BalancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BalancePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BalancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
