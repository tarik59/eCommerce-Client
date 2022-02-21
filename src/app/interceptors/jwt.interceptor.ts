import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/eshop.services/auth-services/auth.service';
import { take } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
currentUser:User;
  constructor(private accountService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.accountService.currentUser.pipe(take(1)).subscribe(user=>this.currentUser=user);
    if(this.currentUser)
    {
      request =request.clone({
        setHeaders:{
          Authorization:`Bearer ${this.currentUser.token}`
        }
      });
    }
    return next.handle(request);
  }
}
