import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavebarComponent } from './admin-navebar.component';

describe('AdminNavebarComponent', () => {
  let component: AdminNavebarComponent;
  let fixture: ComponentFixture<AdminNavebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNavebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNavebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
