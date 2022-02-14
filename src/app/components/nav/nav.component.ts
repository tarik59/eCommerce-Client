import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/eshop.services/auth-services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  check:boolean=false;
  user:User;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.currentUser.subscribe(x=>this.user=x);
  }
  logout()
  {
    this.auth.logout();
  }

}
