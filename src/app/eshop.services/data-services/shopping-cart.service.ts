import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http:HttpClient) { }

  apiUrl:'https://localhost:44356/api';

  addProductToShoppingCart(productId:number)
  {
    return this.http.post(`https://localhost:44356/api/shoppingcart/addProduct/${productId}`,{});
  }
  getShoppingCartProducts()
  {
    return this.http.get<Product[]>(`https://localhost:44356/api/shoppingcart/Products`);
  }
  changeProductQuantity(productId:number,increasing:boolean)
  {
    return this.http.put(`https://localhost:44356/api/shoppingcart/changeProductQuantity/${productId}/${increasing}`,{});
  }
}
