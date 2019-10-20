import { TestBed, async, inject } from '@angular/core/testing';

import { BugsGuardGuard } from './bugs-guard.guard';

describe('BugsGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BugsGuardGuard]
    });
  });

  it('should ...', inject([BugsGuardGuard], (guard: BugsGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
