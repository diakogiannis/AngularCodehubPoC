import { Component, OnInit, ViewChild } from '@angular/core';
import { BugFormComponent } from '../bug-form/bug-form.component';
import { BugsApiService } from '../../../../shared/bugs-api.service';
import { Router } from '@angular/router';
import { Bug } from '../../../../shared/models/bug';

@Component({
  selector: 'codehub-bug-create',
  templateUrl: './bug-create.component.html',
  styleUrls: ['./bug-create.component.scss']
})
export class BugCreateComponent implements OnInit {

  @ViewChild(BugFormComponent, { static: true })
  formComponent: BugFormComponent;

  constructor(
    private bugsApiService: BugsApiService
    // tslint:disable-next-line:align
    , private router: Router
  ) {
  }

  ngOnInit() {
  }

  create() {

    if (this.formComponent.bugForm.invalid) {
      Object.keys(this.formComponent.bugForm.controls).forEach(
        control => this.formComponent.bugForm.get(control).markAsDirty()
      );
      return;
    }

    // Form is valid.
    // To allow going through Guard.
    this.formComponent.bugForm.markAsPristine();

    this.bugsApiService.postBug(this.formComponent.bugForm.value as Bug).subscribe(
      x => {
        if (confirm('Bug registered!\nDo you want to be redirected to the Search Page?')) {
          this.router.navigate(['/bugs-search']);
        }
        this.formComponent.bugForm.reset();
      }, err => {
        alert('An error occurred!\nPlease refer to the browser console for details.');
        console.error(err);
      });
  }

  goBack() {
    this.router.navigate(['/bugs-search']);
  }
}
