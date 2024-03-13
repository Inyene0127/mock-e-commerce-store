import { Component, OnInit } from '@angular/core';
import { Cart, CartItems } from '../../../../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cart: Cart = { items: [{
    id: 1,
    product: 'https:via.placeholder.com/150',
    name: 'snickers',
    price: 1500,
    quantity: 1,
  }]}
  dataSource: Array<CartItems> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]
  constructor(){}
  ngOnInit(): void {
      this.dataSource = this.cart.items;
  }

}
