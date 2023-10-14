import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNonFunctionalUserDataComponent } from './admin-non-functional-user-data.component';

describe('AdminNonFunctionalUserDataComponent', () => {
  let component: AdminNonFunctionalUserDataComponent;
  let fixture: ComponentFixture<AdminNonFunctionalUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNonFunctionalUserDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNonFunctionalUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
