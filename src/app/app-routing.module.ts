import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficerComponent } from './view/officer/officer.component';
import { HomeComponent } from './view/home/home.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "officer",
    component: OfficerComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }