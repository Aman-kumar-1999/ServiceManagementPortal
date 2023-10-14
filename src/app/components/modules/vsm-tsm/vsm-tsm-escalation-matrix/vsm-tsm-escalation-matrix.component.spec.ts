import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsmTsmEscalationMatrixComponent } from './vsm-tsm-escalation-matrix.component';

describe('VsmTsmEscalationMatrixComponent', () => {
  let component: VsmTsmEscalationMatrixComponent;
  let fixture: ComponentFixture<VsmTsmEscalationMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsmTsmEscalationMatrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsmTsmEscalationMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
