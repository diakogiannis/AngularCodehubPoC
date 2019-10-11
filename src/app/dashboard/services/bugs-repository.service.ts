import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Bug} from '../model/Bug';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BugsRepositoryService {

  private readonly endpoint = environment.baseUrl + '/bugs';

  constructor(private http: HttpClient) {
  }

  getBugs(): Observable<Bug[]> {
    return this.http.get<Bug[]>(this.endpoint);
  }

}
