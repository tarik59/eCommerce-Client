import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/eshop.services/auth-services/auth.service';
import { RegisterModel } from 'src/app/models/register-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService,private toastr:ToastrService,private router:Router) { }

  model:any={};
  ngOnInit(): void {
  }

  register()
  {
    //console.log(this.model);
     this.auth.register(this.model).subscribe(data=>{
       localStorage.setItem('user',JSON.stringify(data));
       this.router.navigateByUrl('');
     },error=>{
      this.toastr.error(error.error.message);
      console.log(error);
    });
  }

}
