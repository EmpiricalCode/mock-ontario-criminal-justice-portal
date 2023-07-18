import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfficerComponent } from './officer/officer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OfficerLoggedInComponent } from './officer/officer-logged-in/officer-logged-in.component';
import { OfficerLoggedOutComponent } from './officer/officer-logged-out/officer-logged-out.component';

@NgModule({
  declarations: [
    AppComponent,
    OfficerComponent,
    HomeComponent,
    PageNotFoundComponent,
    OfficerLoggedInComponent,
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
