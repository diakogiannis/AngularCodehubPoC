import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'codehub-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.scss']
})
export class BugEditComponent implements OnInit {

  IsValid: boolean;

  constructor() { }

  ngOnInit() {
  }

  formValidChangedHandler(formisValid: boolean) {
    this.IsValid = formisValid;
  }

}
