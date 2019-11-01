import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BugsApiService } from 'src/app/shared/bugs-api.service';
import { SearchForm } from 'src/app/shared/models/search-form';
import { Bug } from 'src/app/shared/models/bug';

@Component({
  selector: 'codehub-bugs-search',
  templateUrl: './bugs-search.component.html',
  styleUrls: ['./bugs-search.component.scss']
})
export class BugsSearchComponent implements OnInit {

  priorities: number[] = [];
  pageSizes: number[] = [5, 10, 15];
  // TODO: Somehow get number of pages. Perhaps get all bugs (unpaginated) calculate it according to pageSize?
  numOfPages = Number.MAX_SAFE_INTEGER;

  searchForm: FormGroup;
  bugs: Bug[] = [];

  // This variable is used to store the last search criteria that were used.
  // It is utilised for sorting on click-on-header, without using the current value of the searchForm.
  // Not a pretty solution, but the least invasive.
  lastSearchForm: SearchForm;
  searchMade = false;

  page = 0;
  size = this.pageSizes[0];
  sort: string;

  constructor(private fb: FormBuilder, private bugsApiService: BugsApiService) { }

  ngOnInit() {
    this.initForm();
    this.priorities = this.bugsApiService.priorities;
  }

  initForm() {
    this.searchForm = this.fb.group({
      title: [''],
      priority: [1, Validators.required],
      reporter: [''],
      status: ['']
    });
  }

  reset() {
    this.searchForm.reset();
  }

  onSubmit(byPageSort = false) {

    // If it was not caused by a change in the pagesize/sorting. Namely, if it was caused by hitting the 'search' button.
    if (!byPageSort) {
      // Reset us to the first page.
      this.page = 0;
      // Save the search criteria. Used for sorting.
      this.lastSearchForm = this.searchForm.value;
    }

    // If it was caused by paging/sorting, use the 'lastSearchForm' for the search, thus ignoring the current values of the form.
    this.bugsApiService.getBugs((byPageSort ? this.lastSearchForm : this.searchForm.value), this.page, this.size, this.sort).subscribe(
      (val: Bug[]) => this.bugs = val,
      null,
      () => this.searchMade = true
    );
  }

  nextPage() {
    console.log(this.page);
    this.page++;
    if (this.page > this.numOfPages) { this.page = this.numOfPages; }
    this.onSubmit(true);
  }

  prevPage() {
    this.page--;
    if (this.page < 0) { this.page = 0; }
    this.onSubmit(true);
  }

  setPageSize(size: number) {
    this.size = size;
    // Return to first page.
    this.page = 0;
    this.onSubmit(true);
  }

  onSortEvent(sort) {
    this.sort = sort;
    this.onSubmit(true);
  }
}
