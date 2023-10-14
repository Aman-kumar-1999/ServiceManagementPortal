import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleActionTrackerComponent } from './circle-action-tracker.component';

describe('CircleActionTrackerComponent', () => {
  let component: CircleActionTrackerComponent;
  let fixture: ComponentFixture<CircleActionTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleActionTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleActionTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
