import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  apiUrl:'https://localhost:44356/api';
  createOrder()
  {
    return this.http.post('https://localhost:44356/api/orders',{});
  }
  getAllOrdersByUser()
  {
    return this.http.get<any []>('https://localhost:44356/api/orders');
  }
}
