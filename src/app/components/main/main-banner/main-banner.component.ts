import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/eshop.services/data-services/shopping-cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit {

  constructor(private _shoppingCartService:ShoppingCartService) { }
  @Input() product:Product;
  ngOnInit(): void {
  }
  addProduct(id: number){
    this._shoppingCartService.addProductToShoppingCart(id).subscribe();
  }
}
