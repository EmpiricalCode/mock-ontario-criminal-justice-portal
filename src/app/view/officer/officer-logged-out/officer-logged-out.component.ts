import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-officer-logged-out',
  templateUrl: './officer-logged-out.component.html',
  styleUrls: ['./officer-logged-out.component.css']
})
export class OfficerLoggedOutComponent {

  constructor(public oidcSecurityService: OidcSecurityService) {}

  login() {
    this.oidcSecurityService.authorize();
  }
}
