import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-small-banner',
  templateUrl: './small-banner.component.html',
  styleUrls: ['./small-banner.component.css']
})
export class SmallBannerComponent implements OnInit {

  constructor() { }
  @Input() products:Product[];
  ngOnInit(): void {
  }

}
