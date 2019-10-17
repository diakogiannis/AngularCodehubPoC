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
  @Output() refresh: EventEmitter<any> = new EventEmitter();

  // Default values.
  currentlySortedBy = '';
  sortOrder = 'asc';

  constructor(private bugsApiService: BugsApiService) { }

  ngOnInit() {
  }

  sortColumn(sortBy: string) {

    // If we have no bugs displayed, don't bother doing anything.
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

  delete(id: number) {
    if (!confirm('You are about to delete bug: ' + id + '!\nDo you want to proceed?')) { return; }

    this.bugsApiService.deleteBug(id).subscribe(
      () => alert('Bug has been deleted.'),
      (err) => {
        alert('An error occurred while deleting bug ' + id + '!\nRefer to console for details.');
        console.error(err);
      },
      () => this.refresh.emit()
      );
  }
}
