import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-defense-lawyer-logged-out',
  templateUrl: './defense-lawyer-logged-out.component.html',
  styleUrls: ['./defense-lawyer-logged-out.component.css']
})
export class DefenseLawyerLoggedOutComponent {

  constructor(public oidcSecurityService: OidcSecurityService) {}

  login() {
    this.oidcSecurityService.authorize();
  }
}