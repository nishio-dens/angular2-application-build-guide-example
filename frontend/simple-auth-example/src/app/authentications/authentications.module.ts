import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationsRoutingModule} from './authentications-routing.module';
import {AuthenticationsComponent} from './authentications.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationsRoutingModule,
    SharedModule
  ],
  declarations: [AuthenticationsComponent]
})
export class AuthenticationsModule { }
