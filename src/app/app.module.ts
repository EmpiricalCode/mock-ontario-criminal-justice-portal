import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfficerComponent } from './view/officer/officer.component';
import { HomeComponent } from './view/home/home.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { OfficerloggedIn$Component } from './view/officer/officer-logged-in/officer-logged-in.component';
import { OfficerLoggedOutComponent } from './view/officer/officer-logged-out/officer-logged-out.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
