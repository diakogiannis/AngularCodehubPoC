import {Component, OnInit, ViewChild} from '@angular/core';
import {BugFormComponent} from '../bug-form/bug-form.component';
import {BugsApiService} from '../../../../shared/bugs-api.service';
import {Router} from '@angular/router';

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
    , private router: Router
  ) {
  }

  ngOnInit() {
  }

  create() {
    this.bugsApiService.postBug(this.formComponent.bugForm).subscribe(
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
