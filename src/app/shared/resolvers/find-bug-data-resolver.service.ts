import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Bug } from '../models/bug';
import { BugsApiService } from '../bugs-api.service';
import { catchError, filter, take } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindBugDataResolverService implements Resolve<Bug> {

  bug: Bug;

  constructor(private bugsApiService: BugsApiService, private router: Router) {
  }

  resolve(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bug> {
    const id = activatedRoute.params.id;
    return this.bugsApiService.getBug(id).pipe(take(1),
      filter(x => {
        // if (x) {
        // this.router.navigate(['bug-create', id]);
        // }
        return x.id === id;
      }
      ), catchError(() => {
        alert('Error in resolving id!');
        this.router.navigate(['/']);
        return EMPTY;
      }));

  }
}
