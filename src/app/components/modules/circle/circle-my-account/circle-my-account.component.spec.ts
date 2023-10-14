import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleMyAccountComponent } from './circle-my-account.component';

describe('CircleMyAccountComponent', () => {
  let component: CircleMyAccountComponent;
  let fixture: ComponentFixture<CircleMyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleMyAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
