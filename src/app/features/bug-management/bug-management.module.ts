import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugsDisplayComponent } from './components/bugs-display/bugs-display.component';
import { BugManagementRoutingModule } from './bug-management-routing.module';
import { BugsSearchComponent } from './components/bugs-search/bugs-search.component';
import { BugCreateComponent } from './components/bug-create/bug-create.component';
import { BugEditComponent } from './components/bug-edit/bug-edit.component';
import { BugFormComponent } from './components/bug-form/bug-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BugsCommentsComponent } from './components/bugs-comments/bugs-comments.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BugsDisplayComponent, BugsSearchComponent, BugCreateComponent, BugEditComponent, BugFormComponent,
    BugsCommentsComponent],
  imports: [
    SharedModule,
    BugManagementRoutingModule, ReactiveFormsModule
  ],
  exports: [
    BugsDisplayComponent, BugsSearchComponent, BugCreateComponent, BugEditComponent, BugFormComponent,
    BugsCommentsComponent
  ]
})
export class BugManagementModule { }
