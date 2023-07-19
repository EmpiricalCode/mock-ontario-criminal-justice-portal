import { AfterViewInit, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn$: Observable<boolean> | undefined;
  userEmail$: Observable<String> | undefined;

  constructor(public oidcSecurityService: OidcSecurityService) { }

  ngOnInit() {
    this.oidcSecurityService
    .checkAuth()
    .subscribe(({ isAuthenticated, userData, accessToken }) => {

      this.loggedIn$ = new Observable((observer) => {
        observer.next(isAuthenticated);
      })

      this.userEmail$ = new Observable((observer) => {
        observer.next(userData.email);
      })
    });
  }

  logout() {
    this.oidcSecurityService
      .logoff()
      .subscribe((result) => console.log(result));
  }
}
