import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationsRoutingModule} from './authentications-routing.module';
import {AuthenticationsComponent} from './authentications.component';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login/login.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {A2tUiModule, Angular2TokenService} from 'angular2-token';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationsRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    A2tUiModule
  ],
  declarations: [
    AuthenticationsComponent,
    LoginComponent
  ],
  providers: [
    Angular2TokenService
  ]
})
export class AuthenticationsModule { }
