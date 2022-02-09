import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { RegisterModel } from 'src/app/models/register-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  apiUrl=environment.apiUrl;
  user:User;

  login(data:User)
  {
    return this.http.post(this.apiUrl,data).pipe(
      map((loggedUser:User)=>{
        this.user=loggedUser;
      })
    )
  }
  register(data:any)
  {
    console.log("tsrf",data);
    return this.http.post(`${this.apiUrl}/account/register`,data).pipe(
      map((loggedUser:User)=>{
        this.user=loggedUser;
      })
    )
  }
}
