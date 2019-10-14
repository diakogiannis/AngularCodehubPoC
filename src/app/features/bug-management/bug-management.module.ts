import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugsDisplayComponent } from './components/bugs-display/bugs-display.component';
import { BugManagementRoutingModule } from './bug-management-routing.module';
import { BugsSearchComponent } from './components/bugs-search/bugs-search.component';
import { BugCreateComponent } from './components/bug-create/bug-create.component';
import { BugEditComponent } from './components/bug-edit/bug-edit.component';
import { BugFormComponent } from './components/bug-form/bug-form.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [BugsDisplayComponent, BugsSearchComponent, BugCreateComponent, BugEditComponent, BugFormComponent],
  imports: [
    SharedModule,
    BugManagementRoutingModule
  ],
  exports: [
    BugsDisplayComponent, BugsSearchComponent, BugCreateComponent, BugEditComponent, BugFormComponent
  ]
})
export class BugManagementModule { }
