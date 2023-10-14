import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsmTsmCsatDsatComponent } from './vsm-tsm-csat-dsat.component';

describe('VsmTsmCsatDsatComponent', () => {
  let component: VsmTsmCsatDsatComponent;
  let fixture: ComponentFixture<VsmTsmCsatDsatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsmTsmCsatDsatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsmTsmCsatDsatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
