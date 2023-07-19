import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfficerComponent } from './view/officer/officer.component';
import { HomeComponent } from './view/home/home.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { OfficerloggedIn$Component } from './view/officer/officer-logged-in/officer-logged-in.component';
import { OfficerLoggedOutComponent } from './view/officer/officer-logged-out/officer-logged-out.component';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  declarations: [
    AppComponent,
    OfficerComponent,
    HomeComponent,
    PageNotFoundComponent,
    OfficerloggedIn$Component,
    OfficerLoggedOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      config: {
        authority: 'https://login.microsoftonline.com/cddc1229-ac2a-4b97-b78a-0e5cacb5865c/v2.0',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
// esw-spa-poc
//        clientId: 'bfd2df2c-91c4-407a-87d0-069f4515e172',
//cjdd-spa-poc
        clientId: '20a5d198-468b-4488-a921-24af49e17d10',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        maxIdTokenIatOffsetAllowedInSeconds: 600,
        issValidationOff: true,
        autoUserInfo: false,
        // silentRenewUrl: window.location.origin + '/silent-renew.html',
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
        // customParamsAuthRequest: {
        //   prompt: 'select_account', // login, consent
        // },
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
