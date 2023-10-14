import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsmTsmFooterComponent } from './vsm-tsm-footer.component';

describe('VsmTsmFooterComponent', () => {
  let component: VsmTsmFooterComponent;
  let fixture: ComponentFixture<VsmTsmFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsmTsmFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsmTsmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
