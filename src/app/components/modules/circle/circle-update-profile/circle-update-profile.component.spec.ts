import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleUpdateProfileComponent } from './circle-update-profile.component';

describe('CircleUpdateProfileComponent', () => {
  let component: CircleUpdateProfileComponent;
  let fixture: ComponentFixture<CircleUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleUpdateProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
