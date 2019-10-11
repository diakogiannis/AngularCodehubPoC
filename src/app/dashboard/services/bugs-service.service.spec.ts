import {TestBed} from '@angular/core/testing';

import {BugsServiceService} from './bugs-service.service';

describe('BugsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BugsServiceService = TestBed.get(BugsServiceService);
    expect(service).toBeTruthy();
  });
});
