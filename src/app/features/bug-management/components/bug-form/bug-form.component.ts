import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bug } from '../../../../shared/models/bug';

@Component({
  selector: 'codehub-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.scss']
})
export class BugFormComponent implements OnInit {

  @Input()
  bug?: Bug;

  bugForm: FormGroup;
  readOnly: false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
    if (this.bug) {
      this.bugForm.patchValue(this.bug);
    }
  }


  createForm() {
    this.bugForm = this.fb.group({
      id: [null, [Validators.required]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      priority: [null, [Validators.required]],
      reporter: [null, [Validators.required]],
      status: [null, [Validators.required]],
      updatedAt: [null, [Validators.required]],
      createdAt: [null, [Validators.required]]
    });
  }
}
