import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/eshop.services/data-services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-small-banner',
  templateUrl: './small-banner.component.html',
  styleUrls: ['./small-banner.component.css']
})
export class SmallBannerComponent implements OnInit {

  constructor(private productService: ProductService) { }
  @Input() products:Product[];
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      }
    )
  }

}
