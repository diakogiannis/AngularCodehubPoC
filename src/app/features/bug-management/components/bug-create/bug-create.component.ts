import {Component, OnInit, ViewChild} from '@angular/core';
import {BugFormComponent} from '../bug-form/bug-form.component';

@Component({
  selector: 'codehub-bug-create',
  templateUrl: './bug-create.component.html',
  styleUrls: ['./bug-create.component.scss']
})
export class BugCreateComponent implements OnInit {

  @ViewChild(BugFormComponent, {static: true})
  formComponent: BugFormComponent;

  constructor() {
  }

  ngOnInit() {
  }

  saveMe() {
    this.formComponent
  }
}
