import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './eshop.services/auth-services/auth.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-CommerceClient';
  currentUser: User;
  hideComponents:boolean=false;
  constructor(
    private router: Router,
    private authenticationService: AuthService
) {
 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.authenticationService.isLoginState.subscribe(x=>this.hideComponents=x);
}
}
