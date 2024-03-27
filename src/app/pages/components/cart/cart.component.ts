import { Component, OnInit } from '@angular/core';
import { Cart, CartItems } from '../../../../models/cart.model';
import { CartService } from '../../../../services/cart.service';

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
  constructor( private cartService:CartService){
    
  }
  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) =>
      this.cart = _cart
    )
    this.dataSource = this.cart.items;
  }
  getTotal(items: Array<CartItems>): number {
    return this.cartService.getTotal(items);
  }
  clearAll(): void{
    this.cartService.onClearCart();
  }
  removeItem(items: CartItems): void {
    this.cartService.removeCart(items);
  }
  addQuantity(items: CartItems): void {
    this.cartService.addToCart(items);
  }
  removeQuantity(items: CartItems): void{
    this.cartService.removeQuantity(items);
  }
}
