import { TestBed } from '@angular/core/testing';

import { BugReportingApiService } from './bug-reporting-api.service';

describe('BugReportingApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BugReportingApiService = TestBed.get(BugReportingApiService);
    expect(service).toBeTruthy();
  });
});
