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
    this.router.navigate(['/']);
  }

  formValidChangedHandler(formIsValid: boolean) {
    alert('this.IsValid ' + this.IsValid);
    this.IsValid = formIsValid;
  }

}
