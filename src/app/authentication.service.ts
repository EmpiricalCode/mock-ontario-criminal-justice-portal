import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  // Checking if user is logged in by checking localstorage for a token
  loggedIn$: Observable<boolean> = new Observable((observer) => {

    if (localStorage.getItem("token") === null) {
      observer.next(false);
    } else {
      observer.next(true);
    }
  });
}
