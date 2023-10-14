import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleMeetingDashboardComponent } from './circle-meeting-dashboard.component';

describe('CircleMeetingDashboardComponent', () => {
  let component: CircleMeetingDashboardComponent;
  let fixture: ComponentFixture<CircleMeetingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleMeetingDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleMeetingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
