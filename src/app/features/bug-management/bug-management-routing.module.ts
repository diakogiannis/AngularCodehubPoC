import { BugsGuardGuard } from './../../shared/bugs-guard.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BugsSearchComponent } from './components/bugs-search/bugs-search.component';
import { BugCreateComponent } from './components/bug-create/bug-create.component';
import { BugEditComponent } from './components/bug-edit/bug-edit.component';
import { FindBugDataResolverService } from 'src/app/shared/resolvers/find-bug-data-resolver.service';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'bugs-search', component: BugsSearchComponent },
  { path: 'bug-create', component: BugCreateComponent, canDeactivate: [BugsGuardGuard] },
  {
    path: 'bug-edit/:id', component: BugEditComponent, canDeactivate: [BugsGuardGuard], resolve: {
      bug: FindBugDataResolverService
    }
  },
  { path: '**', redirectTo: 'home-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugManagementRoutingModule {
}
