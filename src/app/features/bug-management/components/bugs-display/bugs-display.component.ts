import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bug } from 'src/app/shared/models/bug';
import { BugsApiService } from 'src/app/shared/bugs-api.service';

@Component({
  selector: 'codehub-bugs-display',
  templateUrl: './bugs-display.component.html',
  styleUrls: ['./bugs-display.component.scss']
})
export class BugsDisplayComponent implements OnInit {

  @Input() bugs: Bug[];
  @Output() sortEvent: EventEmitter<string> = new EventEmitter();

  // Default values.
  currentlySortedBy = '';
  sortOrder = 'asc';

  constructor() { }

  ngOnInit() {
  }

  sortColumn(sortBy: string) {
    console.log(this.bugs);

    if (!this.bugs || !this.bugs.length) { return; }

    // If we sort again by the same column, change the sort order.
    if (this.currentlySortedBy === sortBy) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortOrder = 'asc';
    }

    this.currentlySortedBy = sortBy;

    this.sortEvent.emit(sortBy + ',' + this.sortOrder);
  }
}
