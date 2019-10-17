import { TestBed } from '@angular/core/testing';

import { FindBugDataResolverService } from './find-bug-data-resolver.service';

describe('FindBugDataResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindBugDataResolverService = TestBed.get(FindBugDataResolverService);
    expect(service).toBeTruthy();
  });
});
