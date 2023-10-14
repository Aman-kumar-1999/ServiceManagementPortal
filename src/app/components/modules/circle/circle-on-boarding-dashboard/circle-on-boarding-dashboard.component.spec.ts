import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleOnBoardingDashboardComponent } from './circle-on-boarding-dashboard.component';

describe('CircleOnBoardingDashboardComponent', () => {
  let component: CircleOnBoardingDashboardComponent;
  let fixture: ComponentFixture<CircleOnBoardingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleOnBoardingDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleOnBoardingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
