import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './core/header/header.component';
import { MainPageComponent } from './core/main-page/main-page.component';
import { CoreModule } from './core/core.module';
import { FeatModule } from './feat/feat.module';
import { BugReportingApiModule } from './shared/bug-reporting-api/bug-reporting-api.module';
import {DashboardModule} from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    FeatModule,
    BugReportingApiModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
