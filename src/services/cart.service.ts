import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItems } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: []});
  constructor(private _snackBar: MatSnackBar) { }

  addToCart (items: CartItems): void{
    const newItem = [...this.cart.value.items]
    const itemInCart = newItem.find((_item) => _item.id === items.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      newItem.push(items);
    } 
    this.cart.next({ items: newItem });
    this._snackBar.open('Item added to cart', 'Close', {
      duration: 3000,
    });
    console.log(this.cart.value);
  }


}
