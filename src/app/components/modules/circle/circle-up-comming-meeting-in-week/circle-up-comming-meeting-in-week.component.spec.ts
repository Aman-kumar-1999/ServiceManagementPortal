import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleUpCommingMeetingInWeekComponent } from './circle-up-comming-meeting-in-week.component';

describe('CircleUpCommingMeetingInWeekComponent', () => {
  let component: CircleUpCommingMeetingInWeekComponent;
  let fixture: ComponentFixture<CircleUpCommingMeetingInWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleUpCommingMeetingInWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleUpCommingMeetingInWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
