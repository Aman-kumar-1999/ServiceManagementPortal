import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsmTsmChangePasswordComponent } from './vsm-tsm-change-password.component';

describe('VsmTsmChangePasswordComponent', () => {
  let component: VsmTsmChangePasswordComponent;
  let fixture: ComponentFixture<VsmTsmChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsmTsmChangePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsmTsmChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
