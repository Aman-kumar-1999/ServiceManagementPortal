import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleFooterComponent } from './circle-footer.component';

describe('CircleFooterComponent', () => {
  let component: CircleFooterComponent;
  let fixture: ComponentFixture<CircleFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
