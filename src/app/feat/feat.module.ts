import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugSearchComponent } from './bug-search/bug-search.component';
import { BugDisplayComponent } from './bug-display/bug-display.component';
import { BugCreateComponent } from './bug-create/bug-create.component';
import { BugEditComponent } from './bug-edit/bug-edit.component';
import { BugFormComponent } from './bug-form/bug-form.component';
import { FeatRoutingModule } from './feat-routing.module';



@NgModule({
  declarations: [BugSearchComponent, BugDisplayComponent, BugCreateComponent, BugEditComponent, BugFormComponent],
  imports: [
    CommonModule,
    FeatRoutingModule
  ]
})
export class FeatModule { }
