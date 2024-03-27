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
    // console.log(this.cart.value);
  }

  getTotal(items: Array<CartItems>): number {
    return items.map((item) => item.price * item.quantity).reduce((
      prev, current) => prev + current, 0)
  }

  onClearCart(): void{
    this.cart.next({ items: [] });
    this._snackBar.open('Cart cleared', 'ok', {
      duration: 3000,
    });
  }
  removeCart(items: CartItems, update = true): Array<CartItems>{
    const filteredItem = this.cart.value.items.filter((item) => item.id !== items.id);
    if (update){
      this.cart.next({ items: filteredItem });
      this._snackBar.open('Items cleared from cart', 'ok', {
        duration: 3000,
      });
    }
    return filteredItem;
  }

  removeQuantity(items: CartItems){
    let itemForRemoval: CartItems | undefined;
    let filteredItem = this.cart.value.items.map((_item) => {
      if (_item.id === items.id) {
        items.quantity--;
        if(_item.quantity === 0){
          itemForRemoval = items;
        }}
        return _item;
    })
    if (itemForRemoval){
      filteredItem = this.removeCart(itemForRemoval, false);
    }
    this.cart.next({ items: filteredItem});
    this._snackBar.open(' 1 Item removed from cart', 'ok', {
      duration: 3000,
    });
  }

}
