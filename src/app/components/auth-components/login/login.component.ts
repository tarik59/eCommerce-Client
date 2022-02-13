import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/eshop.services/auth-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private toastr:ToastrService) { }
  model:any={};
  ngOnInit(): void {
  }

  login()
  {
    console.log(this.model);
     this.auth.login(this.model).subscribe(data=>{
       localStorage.setItem('user',JSON.stringify(data));
      
     },error=>{
       this.toastr.error(error.error.message);
       console.log(error);
     });
  }
}
