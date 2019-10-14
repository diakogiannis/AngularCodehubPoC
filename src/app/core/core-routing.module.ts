import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BugsDisplayComponent} from '../features/bug-management/components/bugs-display/bugs-display.component';

const routes: Routes = [

  {path: '', component: BugsDisplayComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
