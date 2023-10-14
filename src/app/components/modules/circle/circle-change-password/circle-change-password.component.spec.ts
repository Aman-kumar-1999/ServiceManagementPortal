import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleChangePasswordComponent } from './circle-change-password.component';

describe('CircleChangePasswordComponent', () => {
  let component: CircleChangePasswordComponent;
  let fixture: ComponentFixture<CircleChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleChangePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
