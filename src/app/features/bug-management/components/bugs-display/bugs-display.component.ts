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

  sortBy: string;
  page: number;
  size = 10;

  pages: number;


  constructor(private bugsApiService: BugsApiService) {
  }


  ngOnInit() {
    if (this.bugs == null) {
      this.getBugs('title');
    }
  }


  public getBugs(sort: string) {
    if (this.sortBy == null) {
      this.sortBy = 'asc';
    }

    if (this.page == null) {
      this.page = 0;
    }


    if (this.sortBy === 'desc') {
      this.sortBy = 'asc';
    } else {
      this.sortBy = 'desc';
    }
    this.bugsApiService.getBugs(sort + ',' + this.sortBy, this.page, this.size).subscribe(bugsResponse => {
      this.bugs = bugsResponse;
    });
  }
}
