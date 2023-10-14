import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActionTrackerComponent } from './admin-action-tracker.component';

describe('AdminActionTrackerComponent', () => {
  let component: AdminActionTrackerComponent;
  let fixture: ComponentFixture<AdminActionTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminActionTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminActionTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
