import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRagDashboardComponent } from './admin-rag-dashboard.component';

describe('AdminRagDashboardComponent', () => {
  let component: AdminRagDashboardComponent;
  let fixture: ComponentFixture<AdminRagDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRagDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRagDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
