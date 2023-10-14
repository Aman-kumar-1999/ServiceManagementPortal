import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleNavebarComponent } from './circle-navebar.component';

describe('CircleNavebarComponent', () => {
  let component: CircleNavebarComponent;
  let fixture: ComponentFixture<CircleNavebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleNavebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleNavebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
