import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenticationsComponent} from './authentications.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    {
    path: 'auth',
    component: AuthenticationsComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AuthenticationsRoutingModule { }
