import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsmTsmNavebaseComponent } from './vsm-tsm-navebase.component';

describe('VsmTsmNavebaseComponent', () => {
  let component: VsmTsmNavebaseComponent;
  let fixture: ComponentFixture<VsmTsmNavebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsmTsmNavebaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsmTsmNavebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
