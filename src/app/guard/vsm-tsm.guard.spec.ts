import { TestBed } from '@angular/core/testing';

import { VsmTsmGuard } from './vsm-tsm.guard';

describe('VsmTsmGuard', () => {
  let guard: VsmTsmGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VsmTsmGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
