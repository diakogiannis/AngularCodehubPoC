import { Component, OnInit } from '@angular/core';
import { Bug } from 'src/app/shared/models/bug';
import { BugsApiService } from 'src/app/shared/bugs-api.service';

@Component({
  selector: 'codehub-bugs-display',
  templateUrl: './bugs-display.component.html',
  styleUrls: ['./bugs-display.component.scss']
})
export class BugsDisplayComponent implements OnInit {

  bugs: Bug[];

  constructor(private bugsApiService: BugsApiService) {
  }

  ngOnInit() {
    this.bugsApiService.getBugs().subscribe(bugs => this.getBugs(bugs));

  }

  public getBugs(bugs) {
    this.bugs = bugs;
  }
}
