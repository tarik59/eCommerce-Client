import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { RegisterModel } from 'src/app/models/register-model';
import { BehaviorSubject, Observable } from 'rxjs';
export interface TestObj
{
  id:string;
  name:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  apiUrl=environment.apiUrl;
  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

  login(data:User)
  {
    return this.http.post(`${this.apiUrl}/account/login`,data).pipe(
      map((user:User)=>{
        localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
      })
    )
  }
  register(data:any)
  {
    console.log("tsrf",data);
    return this.http.post(`${this.apiUrl}/account/register`,data).pipe(
      map((user:User)=>{
        localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
      })
    )
  }
}
