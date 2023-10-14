import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsmTsmRagDashboardComponent } from './vsm-tsm-rag-dashboard.component';

describe('VsmTsmRagDashboardComponent', () => {
  let component: VsmTsmRagDashboardComponent;
  let fixture: ComponentFixture<VsmTsmRagDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsmTsmRagDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsmTsmRagDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
