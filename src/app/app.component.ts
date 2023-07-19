import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authenticationService: AuthenticationService) { }
  
  loggedIn: Observable<boolean> = this.authenticationService.loggedIn;

  logout() {
    localStorage.removeItem("token");
    window.location.reload();
  }
}
