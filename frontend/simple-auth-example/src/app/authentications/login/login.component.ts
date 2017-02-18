import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Angular2TokenService, SignInData} from 'angular2-token';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  authError: boolean = false;
  private signInData: SignInData = <SignInData>{};

  constructor(
    private tokenService: Angular2TokenService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
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

  onSubmit(value: any) {
    this.authError = false;
    this.signInData = value;
    this.tokenService.signIn(this.signInData).subscribe(
      r => {
        this.router.navigate(['/']);
      },
      e => {
        this.authError = true;
        console.log("Error " + e);
      }
    );
  }
}
