import { TestBed } from '@angular/core/testing';

import { EmperadorLoginGuard } from './emperador-login.guard';

describe('EmperadorLoginGuard', () => {
  let guard: EmperadorLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmperadorLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
