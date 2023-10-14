import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsmTsmMyAccountComponent } from './vsm-tsm-my-account.component';

describe('VsmTsmMyAccountComponent', () => {
  let component: VsmTsmMyAccountComponent;
  let fixture: ComponentFixture<VsmTsmMyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsmTsmMyAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsmTsmMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
