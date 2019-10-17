import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Bug} from '../models/bug';
import {BugsApiService} from '../bugs-api.service';
import {catchError, filter, take} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindBugDataResolverService implements Resolve<Bug> {

  bug: Bug;

  constructor(private bugsApiService: BugsApiService, private router: Router) {
  }

  resolve(activateRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bug> {
    const id = activateRoute.params.id;
    console.log(id);
    return this.bugsApiService.getBug(id).pipe(take(1),
      filter(x => {
          console.log(x);
          if (x) {
            this.router.navigate(['***']);
          }
          return x.id === id;
        }
      ), catchError(() => {
        this.router.navigate(['***']);
        return EMPTY;
      }));

  }
}
