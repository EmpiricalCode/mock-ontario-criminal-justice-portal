import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})

export class OfficerComponent {

  constructor(private authenticationService: AuthenticationService) { }
  
  loggedIn: Observable<boolean> = this.authenticationService.loggedIn;
}