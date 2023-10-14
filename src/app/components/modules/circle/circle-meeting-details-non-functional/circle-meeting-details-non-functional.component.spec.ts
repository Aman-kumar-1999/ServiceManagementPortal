import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleMeetingDetailsNonFunctionalComponent } from './circle-meeting-details-non-functional.component';

describe('CircleMeetingDetailsNonFunctionalComponent', () => {
  let component: CircleMeetingDetailsNonFunctionalComponent;
  let fixture: ComponentFixture<CircleMeetingDetailsNonFunctionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleMeetingDetailsNonFunctionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleMeetingDetailsNonFunctionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
