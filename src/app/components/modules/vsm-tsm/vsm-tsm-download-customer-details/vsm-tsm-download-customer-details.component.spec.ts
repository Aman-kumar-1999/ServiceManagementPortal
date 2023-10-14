import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsmTsmDownloadCustomerDetailsComponent } from './vsm-tsm-download-customer-details.component';

describe('VsmTsmDownloadCustomerDetailsComponent', () => {
  let component: VsmTsmDownloadCustomerDetailsComponent;
  let fixture: ComponentFixture<VsmTsmDownloadCustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsmTsmDownloadCustomerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsmTsmDownloadCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
