import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsmTsmHeaderComponent } from './vsm-tsm-header.component';

describe('VsmTsmHeaderComponent', () => {
  let component: VsmTsmHeaderComponent;
  let fixture: ComponentFixture<VsmTsmHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsmTsmHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsmTsmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
