import {Component, OnInit, ViewChild} from '@angular/core';
import {BugFormComponent} from '../bug-form/bug-form.component';
import {BugsApiService} from '../../../../shared/bugs-api.service';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {Bug} from '../../../../shared/models/bug';

@Component({
  selector: 'codehub-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.scss']
})
export class BugEditComponent implements OnInit {

  @ViewChild(BugFormComponent, {static: true})
  formComponent: BugFormComponent;
  bug: Bug;

  constructor(
    private bugsApiService: BugsApiService
    , private router: Router
    , private activatedRoute: ActivatedRouteSnapshot
  ) {
  }

  ngOnInit() {
    this.bug = this.activatedRoute.data.bug;
  }

  update() {
    this.bugsApiService.putBug(this.formComponent.bugForm).subscribe(
      x => {
        console.log(x);
      }, err => {
        alert(err);
      },
      () => {
        alert('IMPLEMENT RIGHT PATH');
        this.router.navigate(['/']);
      });
  }

  goBack() {
    alert('IMPLEMENT RIGHT PATH');
    this.router.navigate(['/']);
  }

}
