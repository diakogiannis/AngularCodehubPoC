import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { BugManagementModule } from '../features/bug-management/bug-management.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    BugManagementModule
  ]
})
export class CoreModule { }
