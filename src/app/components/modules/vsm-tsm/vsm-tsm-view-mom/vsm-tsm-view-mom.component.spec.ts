import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsmTsmViewMomComponent } from './vsm-tsm-view-mom.component';

describe('VsmTsmViewMomComponent', () => {
  let component: VsmTsmViewMomComponent;
  let fixture: ComponentFixture<VsmTsmViewMomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsmTsmViewMomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsmTsmViewMomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
