import { Component, OnInit } from '@angular/core';
import { Cart, CartItems } from '../../../../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cart: Cart = { items: [
    {
    id: 1,
    product: 'assets/images/photo_2024-03-13_11-49-58.jpg',
    name: 'Cool dogs vase',
    price: 1500,
    quantity: 1,
  },
    {
    id: 1,
    product: 'assets/images/photo_2024-03-13_11-50-03.jpg',
    name: 'Reading table',
    price: 1500,
    quantity: 3,
  },
]}
  dataSource: Array<CartItems> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]
  constructor(){
    
  }
  ngOnInit(): void {
      this.dataSource = this.cart.items;
      console.log(this.dataSource);
  }
  getTotal(items: Array<CartItems>): number {
    return items.map((item) => item.price * item.quantity).reduce((
      prev, current) => prev + current, 0)
  }

}
