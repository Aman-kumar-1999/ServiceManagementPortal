import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsmTsmViewOpenMeetingComponent } from './vsm-tsm-view-open-meeting.component';

describe('VsmTsmViewOpenMeetingComponent', () => {
  let component: VsmTsmViewOpenMeetingComponent;
  let fixture: ComponentFixture<VsmTsmViewOpenMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsmTsmViewOpenMeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsmTsmViewOpenMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
