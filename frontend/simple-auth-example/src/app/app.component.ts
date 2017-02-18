import {Component} from '@angular/core';
import {Angular2TokenService} from 'angular2-token';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private tokenService: Angular2TokenService
  ) {
    // Authentication
    this
      .tokenService
      .init({
        apiBase: environment.apiBaseUrl,
        signInPath: 'api/auth/sign_in',
        signInRedirect: 'auth/login',
        signOutPath: 'api/auth/sign_out',
        signOutFailedValidate: true,
        validateTokenPath: 'api/auth/validate_token',
      });
  }
}
