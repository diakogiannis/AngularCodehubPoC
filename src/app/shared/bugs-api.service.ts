import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bug } from './models/bug';
import { environment } from 'src/environments/environment';
import { SearchForm } from './models/search-form';

@Injectable({
  providedIn: 'root'
})
export class BugsApiService {

  private readonly endpoint = environment.baseUrl + '/bugs';

  constructor(private http: HttpClient) {
  }

  getBugs(searchForm: SearchForm, page: number, size: number): Observable<Bug[]> {

    console.log(searchForm);

    let urlParams = new HttpParams();
    if (page != null) { urlParams = urlParams.set('page', page.toString()); }
    if (size != null) { urlParams = urlParams.set('size', size.toString()); }
    if (searchForm.title) { urlParams = urlParams.set('title', searchForm.title); }
    if (searchForm.priority != null) {urlParams = urlParams.set('priority', searchForm.priority.toString()); }
    if (searchForm.reporter) { urlParams = urlParams.set('reporter', searchForm.reporter); }
    if (searchForm.status) { urlParams = urlParams.set('status', searchForm.status); }

    console.log(urlParams);

    return this.http.get<Bug[]>(this.endpoint, { params: urlParams });
  }
}
