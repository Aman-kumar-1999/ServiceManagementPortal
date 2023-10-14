import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsmTsmComponent } from './vsm-tsm.component';

describe('VsmTsmComponent', () => {
  let component: VsmTsmComponent;
  let fixture: ComponentFixture<VsmTsmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsmTsmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsmTsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
