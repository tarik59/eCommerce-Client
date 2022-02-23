import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ShoppingCart } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http:HttpClient) { }

  apiUrl:'https://localhost:44356/api';

  addProductToShoppingCart(productId:number)
  {
    console.log(productId);
    return this.http.post(`https://localhost:44356/api/shoppingcart/addProduct`,{
      productId: productId
    });
  }
  getShoppingCart()
  {
    return this.http.get<ShoppingCart>(`https://localhost:44356/api/shoppingcart`);
  }
  changeProductQuantity(productId:number,increasing:boolean)
  {
    return this.http.post(`https://localhost:44356/api/shoppingcart/changeProductQuantity`,{
      productId: productId,
      increasing: increasing
    });
  }
  removeProductFromShoppingCart(productId:number) {
    return this.http.post(`https://localhost:44356/api/shoppingcart/deleteProduct`,{
      productId: productId
    });
  }
}
