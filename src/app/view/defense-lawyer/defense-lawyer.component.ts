import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-defense-lawyer',
  templateUrl: './defense-lawyer.component.html',
  styleUrls: ['./defense-lawyer.component.css']
})
export class DefenseLawyerComponent {

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
