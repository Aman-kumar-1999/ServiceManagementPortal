import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsmTsmOnboardingComponent } from './vsm-tsm-onboarding.component';

describe('VsmTsmOnboardingComponent', () => {
  let component: VsmTsmOnboardingComponent;
  let fixture: ComponentFixture<VsmTsmOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsmTsmOnboardingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsmTsmOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
