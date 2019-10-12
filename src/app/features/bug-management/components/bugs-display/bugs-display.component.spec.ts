import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BugsDisplayComponent} from './bugs-display.component';

describe('BugsDisplayComponent', () => {
  let component: BugsDisplayComponent;
  let fixture: ComponentFixture<BugsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BugsDisplayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
