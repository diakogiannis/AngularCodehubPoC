import { BugsApiService } from 'src/app/shared/bugs-api.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/shared/models/comments';
import { Bug } from 'src/app/shared/models/bug';

@Component({
  selector: 'codehub-bugs-display-comments',
  templateUrl: './bugs-display-comments.component.html',
  styleUrls: ['./bugs-display-comments.component.scss']
})
export class BugsDisplayCommentsComponent implements OnInit {

  @Input() comments: Comments[];

  param: string;
  routeSubscription: Subscription;

  constructor(private bugsApiService: BugsApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscription = this.activeRoute.params.subscribe((p) => {
      this.param = p.id;
    });
    this.bugsApiService.getBug(this.param).subscribe((b: Bug) => this.comments = b.comments);
  }
}
