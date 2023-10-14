import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleActionTrackerNonFunctionalComponent } from './circle-action-tracker-non-functional.component';

describe('CircleActionTrackerNonFunctionalComponent', () => {
  let component: CircleActionTrackerNonFunctionalComponent;
  let fixture: ComponentFixture<CircleActionTrackerNonFunctionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleActionTrackerNonFunctionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleActionTrackerNonFunctionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
