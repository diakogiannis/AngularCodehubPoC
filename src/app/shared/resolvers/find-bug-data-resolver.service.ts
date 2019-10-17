import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Bug} from '../models/bug';
import {BugsApiService} from '../bugs-api.service';
import {filter} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindBugDataResolverService implements Resolve<Bug> {

  bug: Bug;

  constructor(private bugsApiService: BugsApiService, private router: Router) {
  }

  resolve(activateRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bug> {

    const id = activateRoute.params.id;
    return this.bugsApiService.getBug(id).pipe(filter(x => {
        return x.id === id;
      }
      , () => {
        alert('IMPLEMENT ME Something Wrong Happened');
        this.router.navigate(['/']);
      })
    );

  }
}
