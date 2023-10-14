import { TestBed } from '@angular/core/testing';

import { CircleGuard } from './circle.guard';

describe('CircleGuard', () => {
  let guard: CircleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CircleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
