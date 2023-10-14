import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleDownloadCustomerDetailsComponent } from './circle-download-customer-details.component';

describe('CircleDownloadCustomerDetailsComponent', () => {
  let component: CircleDownloadCustomerDetailsComponent;
  let fixture: ComponentFixture<CircleDownloadCustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleDownloadCustomerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleDownloadCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
