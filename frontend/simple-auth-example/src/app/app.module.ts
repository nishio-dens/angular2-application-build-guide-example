import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {TasksModule} from './tasks/tasks.module';
import {AuthenticationsModule} from './authentications/authentications.module';
import {Angular2TokenService} from 'angular2-token';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    TasksModule,
    AuthenticationsModule
  ],
  providers: [
    Angular2TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
