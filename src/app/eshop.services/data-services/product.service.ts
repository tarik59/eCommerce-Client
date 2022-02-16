import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  constructor(private http:HttpClient) { }
  apiUrl:'https://localhost:44356/api';

  getAllProducts()
  {
    return this.http.get<Product[]>(`https://localhost:44356/api/products`);
  }
}
