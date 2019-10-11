import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BugSearchComponent } from './bug-search/bug-search.component';
import { BugCreateComponent } from './bug-create/bug-create.component';
import { BugEditComponent } from './bug-edit/bug-edit.component';

const routes: Routes = [
  // { path: '', component: BugCreateComponent },
  { path: 'bug-search', component: BugSearchComponent },
  { path: 'bug-create', component: BugCreateComponent },
  { path: 'bug-edit/:id', component: BugEditComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatRoutingModule { }
