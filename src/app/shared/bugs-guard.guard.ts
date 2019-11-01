import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { BugsCommentsComponent } from '../features/bug-management/components/bugs-comments/bugs-comments.component';
import { BugEditComponent } from '../features/bug-management/components/bug-edit/bug-edit.component';

@Injectable({
  providedIn: 'root'
})

// export class BugsGuardGuard implements CanActivate {
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
// }

export class BugsGuardGuard implements CanDeactivate<BugEditComponent> {

  canDeactivate(
    component: BugEditComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    console.log(component);

    // if (component.IsValid !== undefined && !component.IsValid) {
    if (!component.formComponent.bugForm.pristine) {
      return confirm('Are you sure you want to discard your changes?');
    }

    console.log(true);
    return true;
  }
}
