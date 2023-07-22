import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficerComponent } from './view/officer/officer.component';
import { HomeComponent } from './view/home/home.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { DefenseLawyerComponent } from './view/defense-lawyer/defense-lawyer.component';
import { PublicComponent } from './view/public/public.component';

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
    path: "defense-lawyer",
    component: DefenseLawyerComponent
  },
  {
    path: "public",
    component: PublicComponent
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