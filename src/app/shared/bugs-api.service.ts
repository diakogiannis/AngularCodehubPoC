import {Bug} from 'src/app/shared/models/bug';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {SearchForm} from './models/search-form';

@Injectable({
  providedIn: 'root'
})
export class BugsApiService {

  private readonly endpoint = environment.baseUrl + '/bugs';

  // Common Variables (that we should actually get from our backend):
  public priorities = [1, 2, 3];
  public reporters = ['QA', 'DEV', 'PO'];

  constructor(private http: HttpClient) {
  }

  getBugs(searchForm: SearchForm = null, page: number = null, size: number = null, sort: string = null): Observable<Bug[]> {

    let urlParams = new HttpParams();

    if (page != null) {
      urlParams = urlParams.set('page', page.toString());
    }
    if (size != null) {
      urlParams = urlParams.set('size', size.toString());
    }
    if (sort) {
      urlParams = urlParams.set('sort', sort);
    }

    if (searchForm) {
      if (searchForm.title) {
        urlParams = urlParams.set('title', searchForm.title);
      }
      if (searchForm.priority != null) {
        urlParams = urlParams.set('priority', searchForm.priority.toString());
      }
      if (searchForm.reporter) {
        urlParams = urlParams.set('reporter', searchForm.reporter);
      }
      if (searchForm.status) {
        urlParams = urlParams.set('status', searchForm.status);
      }
    }

    return this.http.get<Bug[]>(this.endpoint, {params: urlParams});
  }

  // '/5da7010fcd5eba0017126443';
  getBug(id: string): Observable<Bug> {
    return this.http.get<Bug>(this.endpoint + '/' + id);
  }

  postBug(bug: Bug): Observable<Bug> {
    return this.http.post<Bug>(this.endpoint, bug);
  }

  putBug(bug: Bug): Observable<Bug> {
    return this.http.put<Bug>(this.endpoint + '/' + bug.id, bug);
  }

  deleteBug(id: number) {
    return this.http.delete(this.endpoint + '/' + id);
  }

  getAllBugs(): Observable<Bug[]> {
    return this.http.get<Bug[]>(this.endpoint);
  }

}
