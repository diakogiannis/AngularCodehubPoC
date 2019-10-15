import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bug } from './models/bug';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BugsApiService {

  private readonly endpoint = environment.baseUrl + '/bugs?1=1';

  constructor(private http: HttpClient) {
  }

  getBugs(sortby: string, page: number, size: number): Observable<Bug[]> {
    if (sortby == null) {
      sortby = 'title';
    }
    if (page == null) {
      page = 0;
    }
    if (size == null) {
      size = 10;
    }
    const url = this.endpoint + '&sort=' + sortby + '&page=' + page + '&size=' + size;
    console.log('endpoint: ' + url);
    let bugsList: Observable<Bug[]>;
    bugsList = this.http.get<Bug[]>(url);
    if (bugsList == null) {
      return new Observable<Bug[]>();
    } else {
      return bugsList;
    }
  }

}
