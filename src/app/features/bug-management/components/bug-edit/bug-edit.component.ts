import { Component, OnInit, ViewChild } from '@angular/core';
import { BugFormComponent } from '../bug-form/bug-form.component';
import { BugsApiService } from '../../../../shared/bugs-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Bug } from '../../../../shared/models/bug';

@Component({
  selector: 'codehub-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.scss']
})

export class BugEditComponent implements OnInit {

  @ViewChild(BugFormComponent, { static: true })
  formComponent: BugFormComponent;
  bug: Bug;
  public IsValid = true;

  constructor(
    private bugsApiService: BugsApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(bug => {
      this.bug = bug.bug;
    });
  }

  update() {

    if (this.formComponent.bugForm.invalid) {
      Object.keys(this.formComponent.bugForm.controls).forEach(
        control => this.formComponent.bugForm.get(control).markAsDirty()
      );
      return;
    }

    // Form is valid.
    // To allow going through Guard.
    this.formComponent.bugForm.markAsPristine();

    this.bugsApiService.putBug(this.formComponent.bugForm.value as Bug).subscribe(
      x => {
        console.log(x);
      }, err => {
        alert(err);
      },
      () => {
        this.router.navigate(['/']);
      });
  }

  goBack() {
    this.router.navigate(['/bugs-search']);
  }

  formValidChangedHandler(formIsValid: boolean) {
    this.IsValid = formIsValid;
  }

}
