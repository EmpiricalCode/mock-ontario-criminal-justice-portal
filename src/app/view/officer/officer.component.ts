import { Component, Input } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})

export class OfficerComponent {

  loggedIn$: Observable<boolean> | undefined;

  constructor(public oidcSecurityService: OidcSecurityService) { }

  ngOnInit() {
    this.oidcSecurityService
    .checkAuth()
    .subscribe(({ isAuthenticated, userData, accessToken }) => {

      this.loggedIn$ = new Observable((observer) => {
        observer.next(isAuthenticated);
      })
    });
  }
}