import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugSearchComponent } from './bug-search.component';

describe('SearchComponent', () => {
  let component: BugSearchComponent;
  let fixture: ComponentFixture<BugSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
