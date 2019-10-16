import { BugsApiService } from 'src/app/shared/bugs-api.service';
import { Component, OnInit } from '@angular/core';
import { Bug } from 'src/app/shared/models/bug';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/shared/models/comments';

@Component({
  selector: 'codehub-bugs-display-comments',
  templateUrl: './bugs-display-comments.component.html',
  styleUrls: ['./bugs-display-comments.component.scss']
})
export class BugsDisplayCommentsComponent implements OnInit {

  bug$: Observable<Bug>;
  param: string;
  routeSubscription: Subscription;
  com: Comments[];

  constructor(private bugsApiService: BugsApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscription = this.activeRoute.params.subscribe((p) => {
      this.param = '/' + p.id;
    });
    //this.bug$ = this.bugsApiService.getBug(this.param);
    this.bugsApiService.getBug(this.param).subscribe((p) => { this.com = p.comments.map(c => c) });
  }

}
