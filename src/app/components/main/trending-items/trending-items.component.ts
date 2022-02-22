import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ShoppingCartService } from 'src/app/eshop.services/data-services/shopping-cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-trending-items',
  templateUrl: './trending-items.component.html',
  styleUrls: ['./trending-items.component.css']
})
export class TrendingItemsComponent implements OnInit {

  constructor(private shoppingCart:ShoppingCartService,private toastr:ToastrService) { }
  @Input() products:Product[];
  ngOnInit(): void {
  }

  addProductToCart(productId:number)
  {
    console.log(productId);
    this.shoppingCart.addProductToShoppingCart(productId).subscribe(res=>{
      this.toastr.success('Product added succesfully.');
    },error=>{
      this.toastr.error(error.error.message);
      console.log(error.error.message);
    })
  }
  changeProductQuantity()
  {

  }

}
