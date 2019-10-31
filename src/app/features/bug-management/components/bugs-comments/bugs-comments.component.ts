import { Bug } from 'src/app/shared/models/bug';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { BugsApiService } from 'src/app/shared/bugs-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/shared/models/comments';

@Component({
  selector: 'codehub-bugs-comments',
  templateUrl: './bugs-comments.component.html',
  styleUrls: ['./bugs-comments.component.scss']
})
export class BugsCommentsComponent implements OnInit, OnDestroy {

  FormComments: FormGroup;
  TextFormControl: FormControl;
  NameReporterFormControl: FormControl;

  bug: Bug;
  reporterList: Array<string>;

  comments: Comments[] = [];

  param: string;
  routeSubscription: Subscription;

  @Input() FormIsValid: boolean;
  @Output() FormIsValidChanged: EventEmitter<boolean> = new EventEmitter();

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

    /*
     * What if a reporter does not have an associated bug?
     * He is then considered as if he does not exist.
     * We should -somehow- have a static list of reporter names.
     */

    // this.bugsApiService.getBugs().subscribe((p) => {
    //   this.reporterList = p.map(c => c.reporter).filter(function (value, index, self)  { return self.indexOf(value) == index});
    // });

    this.bugsApiService.getBug(this.param).subscribe((p) => { this.bug = p; });
    this.FormIsValid = true;

    this.FormComments.valueChanges.subscribe(form => {
      if (form.freetext.length > 0 && form.nameReporter.length > 0) {
        this.FormIsValid = false;
      } else {
        this.FormIsValid = true;
      }
      this.FormIsValidChanged.emit(this.FormIsValid);
    });
  }

  onSubmit(AddComment = false) {
    if (!this.FormComments.valid) {
      return;
    }

    this.FormIsValid = true;
    this.FormIsValidChanged.emit(this.FormIsValid);

    if (AddComment) {
      // Add comment
      this.bug.comments.push({ _id: null, description: this.FormComments.get('freetext').value, reporter: this.FormComments.get('nameReporter').value });

      this.bugsApiService.putBug(this.bug).subscribe(
        () => alert('Bug has been added.'),
        (err) => {
          alert('An error occurred while adding comment for bug !\nRefer to console for details.');
          console.error(err);
        },
        () =>
          this.bugsApiService.getBug(this.param).subscribe(p => this.comments = p.comments.map(f => f)
          )
      );
      this.FormComments.reset();
    }
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
