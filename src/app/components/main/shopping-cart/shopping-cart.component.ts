import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/eshop.services/data-services/order.service';
import { ShoppingCartService } from 'src/app/eshop.services/data-services/shopping-cart.service';
import { Product, ProductInShoppingCart, ShoppingCart } from 'src/app/models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private toastr:ToastrService,private _shoppingCartService:ShoppingCartService,private orderService:OrderService) { }

  ngOnInit(): void {
    this.getShoppingCart();
  }
  shoppingCart: ShoppingCart;

  getShoppingCart()
  {
    this._shoppingCartService.getShoppingCart().subscribe(shoppingCart=>{
      this.shoppingCart=shoppingCart;
    },error=>{
      console.log(error.error);
    })
  }
  changeProductQuantity(product:ProductInShoppingCart,increasing:boolean)
  {
    product.quantityInShoppingCart = increasing==true ? product.quantityInShoppingCart++ : product.quantityInShoppingCart--;
    this._shoppingCartService.changeProductQuantity(product.id,increasing).subscribe(response=>{
      this.toastr.success('success');
    },error=>{
      console.log(error.error);
    })

  }
  sumShoppingCartTotal()
  {
    let s=0;
    this.shoppingCart.products.forEach((product)=>{
      s+=(product.price);
    })
    return s;
  }
  createOrder()
  {
    this.orderService.createOrder().subscribe(x=>{
      this.toastr.success('Order created.');
      window.location.reload();
    },error=>{
      this.toastr.error('Erorr 10');
    })
  }

}
