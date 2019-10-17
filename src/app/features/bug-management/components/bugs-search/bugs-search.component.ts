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

  priorities: number[] = [1, 2, 3];
  pageSizes: number[] = [2, 5, 10];
  // TODO: Somehow get number of pages. Perhaps get all bugs (unpaginated) calculate it according to pageSize?
  numOfPages = Number.MAX_SAFE_INTEGER;

  searchForm: FormGroup;
  bugs: Bug[] = [];

  page = 0;
  size = 2;

  constructor(private fb: FormBuilder, private bugsApiService: BugsApiService) { }

  ngOnInit() {
    this.initForm();
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
    // this.searchForm.reset();
    console.log(this.bugs);
  }

  onSubmit(byPagination = false) {

    // If it was not caused by a change in the pages, reset to first page.
    if (!byPagination) {
      this.page = 0;
    }
    this.bugsApiService.getBugs(this.searchForm.value as SearchForm, this.page, this.size).subscribe(
      (val: Bug[]) => this.bugs = val
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
}
