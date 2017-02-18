import {Component, OnInit} from '@angular/core';
import {Angular2TokenService} from 'angular2-token';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUserUid: string;

  constructor(
    private tokenService: Angular2TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tokenService.validateToken().subscribe(
      r => {
        this.currentUserUid = this.tokenService.currentUserData.uid
      }
    );
  }

  logout() {
    this.tokenService.signOut().subscribe(
      r => this.router.navigate(['/auth/login']),
      e => console.log("sign out error")
    );
  }
}
