import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})

export class OfficerComponent {

  // Checking if user is logged in by checking localstorage for a token
  loggedIn: Observable<boolean> = new Observable((observer) => {

    if (localStorage.getItem("token") === null) {
      observer.next(false);
    } else {
      observer.next(true);
    }
  });
}