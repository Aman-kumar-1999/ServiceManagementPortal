import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsmTsmActionTrackerComponent } from './vsm-tsm-action-tracker.component';

describe('VsmTsmActionTrackerComponent', () => {
  let component: VsmTsmActionTrackerComponent;
  let fixture: ComponentFixture<VsmTsmActionTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsmTsmActionTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsmTsmActionTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
