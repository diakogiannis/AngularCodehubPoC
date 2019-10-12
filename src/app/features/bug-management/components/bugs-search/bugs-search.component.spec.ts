import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsSearchComponent } from './bugs-search.component';

describe('SearchComponent', () => {
  let component: BugsSearchComponent;
  let fixture: ComponentFixture<BugsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
