import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsmTsmCustomerDetailsComponent } from './vsm-tsm-customer-details.component';

describe('VsmTsmCustomerDetailsComponent', () => {
  let component: VsmTsmCustomerDetailsComponent;
  let fixture: ComponentFixture<VsmTsmCustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsmTsmCustomerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsmTsmCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
