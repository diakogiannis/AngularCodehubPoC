import { BugsGuardGuard } from './../../shared/bugs-guard.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BugsSearchComponent } from './components/bugs-search/bugs-search.component';
import { BugCreateComponent } from './components/bug-create/bug-create.component';
import { BugEditComponent } from './components/bug-edit/bug-edit.component';
import { FindBugDataResolverService } from 'src/app/shared/resolvers/find-bug-data-resolver.service';

const routes: Routes = [
  // { path: '', component: HomePage? },
  { path: 'bugs-search', component: BugsSearchComponent },
  { path: 'bug-create', component: BugCreateComponent },
  {
    path: 'bug-edit/:id', component: BugEditComponent, canDeactivate: [BugsGuardGuard] , resolve: {
      bug: FindBugDataResolverService
    }
  },
  { path: '**', redirectTo: 'bugs-search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugManagementRoutingModule {
}
