import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/eshop.services/data-services/order.service';
import { ShoppingCartService } from 'src/app/eshop.services/data-services/shopping-cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private toastr:ToastrService,private shoppingCart:ShoppingCartService,private orderService:OrderService) { }

  ngOnInit(): void {
    this.getShoppingCartProducts();
  }
  products:Product[];

  getShoppingCartProducts()
  {
    this.shoppingCart.getShoppingCartProducts().subscribe(products=>{
      this.products=products;
    },error=>{
      console.log(error.error);
    })
  }
  changeProductQuantity(productId:number,increasing:boolean)
  {
    this.shoppingCart.changeProductQuantity(productId,increasing).subscribe(response=>{
      this.toastr.success('success');
    },error=>{
      console.log(error.error);
    })

  }
  sumShoppingCartTotal()
  {
    let s=0;
    this.products.forEach((product)=>{
      s+=(product.price);
    })
    return s;
  }
  createOrder()
  {
    this.orderService.createOrder().subscribe(x=>{
      this.toastr.success('Order created.');
      //window.location.reload();
      this.products=[];
    },error=>{
      this.toastr.error('Erorr 10');
    })
  }

}
