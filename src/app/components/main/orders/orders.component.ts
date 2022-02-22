import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/eshop.services/data-services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.getAllOrdersByUser();
  }
  orders:any[];
  getAllOrdersByUser()
  {
    this.orderService.getAllOrdersByUser().subscribe(orders=>{
    this.orders=orders;
    });
  }

}
