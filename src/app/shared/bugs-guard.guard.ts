import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { BugsCommentsComponent } from '../features/bug-management/components/bugs-comments/bugs-comments.component';
import { BugEditComponent } from '../features/bug-management/components/bug-edit/bug-edit.component';
import { BugCreateComponent } from '../features/bug-management/components/bug-create/bug-create.component';

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

export class BugsGuardGuard implements CanDeactivate<BugEditComponent | BugCreateComponent> {

  canDeactivate(
    component: BugEditComponent | BugCreateComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    // if (component.IsValid !== undefined && !component.IsValid) {
    if (!component.formComponent.bugForm.pristine) {
      return confirm('You have unsaved changes!\nAre you sure you want to discard them?');
    }

    return true;
  }
}
