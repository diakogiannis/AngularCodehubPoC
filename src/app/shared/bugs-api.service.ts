import { Bug } from 'src/app/shared/models/bug';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchForm } from './models/search-form';

@Injectable({
  providedIn: 'root'
})
export class BugsApiService {

  private readonly endpoint = environment.baseUrl + '/bugs?1=1';

  constructor(private http: HttpClient) {
  }

  // getBugs(sortby: string, page: number, size: number): Observable<Bug[]> {
  //   if (sortby == null) {
  //     sortby = 'title';
  //   }
  //   if (page == null) {
  //     page = 0;
  //   }
  //   if (size == null) {
  //     size = 10;
  //   }
  //   const url = this.endpoint + '&sort=' + sortby + '&page=' + page + '&size=' + size;
  //   console.log('endpoint: ' + url);
  //   let bugsList: Observable<Bug[]>;
  //   bugsList = this.http.get<Bug[]>(url);
  //   if (bugsList == null) {
  //     return new Observable<Bug[]>();
  //   } else {
  //     return bugsList;
  //   }
  // }

  getBugs(searchForm: SearchForm, page: number, size: number): Observable<Bug[]> {

    let urlParams = new HttpParams();
    if (page != null) { urlParams = urlParams.set('page', page.toString()); }
    if (size != null) { urlParams = urlParams.set('size', size.toString()); }
    if (searchForm.title) { urlParams = urlParams.set('title', searchForm.title); }
    if (searchForm.priority != null) {urlParams = urlParams.set('priority', searchForm.priority.toString()); }
    if (searchForm.reporter) { urlParams = urlParams.set('reporter', searchForm.reporter); }
    if (searchForm.status) { urlParams = urlParams.set('status', searchForm.status); }

    return this.http.get<Bug[]>(this.endpoint, { params: urlParams });
  }

  getBug(id: string): Observable<Bug> {
    const url = environment.baseUrl + '/bugs' + id; //'/5da7010fcd5eba0017126443';
    console.log('set endpoint: ' + url);
    let bug: Observable<Bug>;
    bug = this.http.get<Bug>(url);
    if (bug == null) {
      return new Observable<Bug>();
    } else {
      return bug;
    }
  }

  getAllBugs(): Observable<Bug[]> {
    const url = environment.baseUrl + '/bugs';
    console.log('endpoint: ' + url);
    let bugslist: Observable<Bug[]>;
    bugslist = this.http.get<Bug[]>(url);
    if (bugslist == null) {
      return new Observable<Bug[]>();
    } else {
      return bugslist;
    }
  }
}
