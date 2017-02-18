import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationsRoutingModule} from './authentications-routing.module';
import {AuthenticationsComponent} from './authentications.component';
import {SharedModule} from '../shared/shared.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationsRoutingModule,
    SharedModule
  ],
  declarations: [AuthenticationsComponent, LoginComponent]
})
export class AuthenticationsModule { }
