import { TestBed } from '@angular/core/testing';
import { BugsApiService } from './bugs-api.service';


describe('BugsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BugsApiService = TestBed.get(BugsApiService);
    expect(service).toBeTruthy();
  });
});
