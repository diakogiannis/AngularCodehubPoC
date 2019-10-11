import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugDisplayComponent } from './bug-display.component';

describe('BugDisplayComponent', () => {
  let component: BugDisplayComponent;
  let fixture: ComponentFixture<BugDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
