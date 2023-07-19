import { Component } from '@angular/core';

@Component({
  selector: 'app-officer-logged-out',
  templateUrl: './officer-logged-out.component.html',
  styleUrls: ['./officer-logged-out.component.css']
})
export class OfficerLoggedOutComponent {

  // Setting a token and reloading the page
  login() {
    localStorage.setItem("token", "token");
    window.location.reload();
  }
}
