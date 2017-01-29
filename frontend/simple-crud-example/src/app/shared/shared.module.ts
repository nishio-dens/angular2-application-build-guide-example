import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    PageNotFoundComponent
  ],
  declarations: [
    NavbarComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
