import { TestBed } from '@angular/core/testing';

import { EmperadorGuard } from './emperador.guard';

describe('EmperadorGuard', () => {
  let guard: EmperadorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmperadorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
