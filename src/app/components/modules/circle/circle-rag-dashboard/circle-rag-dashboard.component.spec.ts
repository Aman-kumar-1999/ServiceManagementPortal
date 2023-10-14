import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleRagDashboardComponent } from './circle-rag-dashboard.component';

describe('CircleRagDashboardComponent', () => {
  let component: CircleRagDashboardComponent;
  let fixture: ComponentFixture<CircleRagDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleRagDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleRagDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
