import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-hot-items',
  templateUrl: './hot-items.component.html',
  styleUrls: ['./hot-items.component.css']
})
export class HotItemsComponent implements OnInit {

  constructor() { }
  @Input() products:Product[];

  ngOnInit(): void {
  }

}
