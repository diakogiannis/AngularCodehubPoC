import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BugsDisplayComponent} from './components/bugs-display/bugs-display.component';


@NgModule({
  declarations: [BugsDisplayComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BugsDisplayComponent
  ]
})
export class DashboardModule {
}
