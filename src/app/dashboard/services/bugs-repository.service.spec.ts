import {TestBed} from '@angular/core/testing';

import {BugsRepositoryService} from './bugs-repository.service';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('BugsRepositoryService', () => {


  // We declare the variables that we'll use for the Test Controller and for our Service
  let httpTestingController: HttpTestingController;
  let service: BugsRepositoryService;


  beforeEach(() => TestBed.configureTestingModule({

    providers: [BugsRepositoryService],
    imports: [HttpClientTestingModule]

  }));


  afterEach(() => {
    //httpTestingController.verify();
  });


  // Angular default test added when you generate a service using the CLI
  it('should be created', () => {
    // We inject our service (which imports the HttpClient) and the Test Controller
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(BugsRepositoryService);
    expect(service).toBeTruthy();
  });


  it('should bring a comment with not null id', () => {
    // We inject our service (which imports the HttpClient) and the Test Controller
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(BugsRepositoryService);
    service.getBugs()
      .subscribe(bugs => {
        console.log(bugs);
        expect(bugs[0].id.length >= 1);

      });
  });

});


