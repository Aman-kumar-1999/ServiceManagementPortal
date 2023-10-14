import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCustomerAllocationComponent } from './circle-customer-allocation.component';

describe('CircleCustomerAllocationComponent', () => {
  let component: CircleCustomerAllocationComponent;
  let fixture: ComponentFixture<CircleCustomerAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleCustomerAllocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleCustomerAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
