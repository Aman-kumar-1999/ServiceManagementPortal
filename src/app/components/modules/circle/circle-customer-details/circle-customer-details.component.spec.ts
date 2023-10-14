import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCustomerDetailsComponent } from './circle-customer-details.component';

describe('CircleCustomerDetailsComponent', () => {
  let component: CircleCustomerDetailsComponent;
  let fixture: ComponentFixture<CircleCustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleCustomerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
