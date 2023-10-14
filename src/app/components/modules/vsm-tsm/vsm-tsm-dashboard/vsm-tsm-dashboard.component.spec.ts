import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsmTsmDashboardComponent } from './vsm-tsm-dashboard.component';

describe('VsmTsmDashboardComponent', () => {
  let component: VsmTsmDashboardComponent;
  let fixture: ComponentFixture<VsmTsmDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsmTsmDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsmTsmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
