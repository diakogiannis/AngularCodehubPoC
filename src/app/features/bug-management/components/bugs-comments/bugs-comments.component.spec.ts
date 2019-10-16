import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsCommentsComponent } from './bugs-comments.component';

describe('BugsCommentsComponent', () => {
  let component: BugsCommentsComponent;
  let fixture: ComponentFixture<BugsCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
