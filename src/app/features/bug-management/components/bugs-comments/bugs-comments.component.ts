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
  reporters: string[] = [];

  comments: Comments[] = [];

  param: string;
  routeSubscription: Subscription;

  @Input() FormIsValid: boolean;
  @Output() FormIsValidChanged: EventEmitter<boolean> = new EventEmitter();

  constructor(private bugsApiService: BugsApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.reporters = this.bugsApiService.reporters;

    this.TextFormControl = new FormControl('', Validators.required);
    this.NameReporterFormControl = new FormControl('QA', Validators.required);
    this.FormComments = new FormGroup({
      description: this.TextFormControl,
      reporter: this.NameReporterFormControl
    });

    this.routeSubscription = this.activatedRoute.params.subscribe((p) => {
      this.param = p.id;
    });

    // this.bug$ = this.bugsApiService.getBug(this.param);

    /*
     * What if a reporter does not have an associated bug?
     * He is then considered as if he does not exist.
     * We should -somehow- have a static list of reporter names.
     */

    // this.bugsApiService.getBugs().subscribe((p) => {
    //   this.reporterList = p.map(c => c.reporter).filter(function (value, index, self)  { return self.indexOf(value) == index});
    // });

    this.bugsApiService.getBug(this.param).subscribe((p: Bug) => {
      this.bug = p;
      this.comments = p.comments;
    });
    this.FormIsValid = true;

    this.FormComments.valueChanges.subscribe(
      () => {
        this.FormIsValidChanged.emit(this.FormComments.valid);
      });
  }

  onSubmit(AddComment = false) {

    if (!this.FormComments.valid) {
      this.FormComments.controls.description.markAsDirty();
      this.FormComments.controls.reporter.markAsDirty();
      return;
    }

    this.FormIsValidChanged.emit(this.FormComments.valid);

    if (AddComment) {

      // Add comment
      if (!this.bug.comments) {
        this.bug.comments = [];
      }
      this.bug.comments.push(this.FormComments.value);

      this.bugsApiService.putBug(this.bug).subscribe(
        null,
        (err) => {
          alert('An error occurred while adding comment for bug !\nRefer to console for details.');
          console.error(err);
        },
        () => {
          this.bugsApiService.getBug(this.param).subscribe(p => this.comments = p.comments);
        }
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
