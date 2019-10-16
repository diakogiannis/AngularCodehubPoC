import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsDisplayCommentsComponent } from './bugs-display-comments.component';

describe('BugsDisplayCommentsComponent', () => {
  let component: BugsDisplayCommentsComponent;
  let fixture: ComponentFixture<BugsDisplayCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsDisplayCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsDisplayCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
