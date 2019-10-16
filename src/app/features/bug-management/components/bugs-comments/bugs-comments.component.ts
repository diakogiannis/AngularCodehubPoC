import { Bug } from 'src/app/shared/models/bug';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BugsApiService } from 'src/app/shared/bugs-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'codehub-bugs-comments',
  templateUrl: './bugs-comments.component.html',
  styleUrls: ['./bugs-comments.component.scss']
})
export class BugsCommentsComponent implements OnInit, OnDestroy {

  FormComments: FormGroup;
  TextFormControl: FormControl;
  NameReporterFormControl: FormControl;

  bug$: Observable<Bug>;
  reporterList: Array<string>;

  param: string;
  routeSubscription: Subscription;

  constructor(private bugsApiService: BugsApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.TextFormControl = new FormControl('', Validators.required);
    this.NameReporterFormControl = new FormControl('', Validators.required);
    this.FormComments = new FormGroup({
      freetext: this.TextFormControl,
      nameReporter: this.NameReporterFormControl
    });

    this.routeSubscription = this.activeRoute.params.subscribe((p) => {
      this.param = '/' + p.id;
    });
    //this.bug$ = this.bugsApiService.getBug(this.param);

    this.bugsApiService.getAllBugs().subscribe((p) => {
      this.reporterList = p.map(c => c.reporter)
      .filter(function(value, index){ return p.map(c => c.reporter).indexOf(value) == index });
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  onSubmit(myForm: FormGroup){
    if (!myForm.valid) {
      return;
    }
    console.log(myForm.value);
  }

}
