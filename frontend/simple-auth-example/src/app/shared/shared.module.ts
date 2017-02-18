import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PageNotFoundComponent,
    NavbarComponent
  ],
  exports: [
    PageNotFoundComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
