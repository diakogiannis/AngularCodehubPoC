import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bug } from '../../../../shared/models/bug';
import { BugsApiService } from 'src/app/shared/bugs-api.service';

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

  priorities: number[] = [];
  reporters: string[] = [];

  constructor(
    private fb: FormBuilder,
    private bugsApiService: BugsApiService
  ) {
  }

  ngOnInit() {
    this.createForm();
    if (this.bug) {
      this.bugForm.patchValue(this.bug);
    }

    this.priorities = this.bugsApiService.priorities;
    this.reporters = this.bugsApiService.reporters;
  }


  createForm() {
    this.bugForm = this.fb.group({
      id: [null],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      priority: [1, [Validators.required]],
      reporter: [null, [Validators.required]],
      status: [null, [Validators.required]],
      updatedAt: [null],
      createdAt: [null]
    });
  }
}
