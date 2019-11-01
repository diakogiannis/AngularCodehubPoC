import {Component, OnInit, ViewChild} from '@angular/core';
import {BugFormComponent} from '../bug-form/bug-form.component';
import {BugsApiService} from '../../../../shared/bugs-api.service';
import {Router} from '@angular/router';
import {Bug} from '../../../../shared/models/bug';

@Component({
  selector: 'codehub-bug-create',
  templateUrl: './bug-create.component.html',
  styleUrls: ['./bug-create.component.scss']
})
export class BugCreateComponent implements OnInit {

  @ViewChild(BugFormComponent, {static: true})
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
    this.bugsApiService.postBug(this.formComponent.bugForm.value as Bug).subscribe(
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


}
