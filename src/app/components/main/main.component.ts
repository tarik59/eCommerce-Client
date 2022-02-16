import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/eshop.services/data-services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _productService:ProductService) { }
products:Product[];
  ngOnInit(): void { 
    this.getProductFromServer();
  }

  getProductFromServer()
  {
    this._productService.getAllProducts().subscribe((data:Product[])=>{
      console.log(data);
      this.products=data;
    });
  }

}
