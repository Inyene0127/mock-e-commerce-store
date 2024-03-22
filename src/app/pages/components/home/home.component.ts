import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../../services/cart.service';
import { Product } from '../../../../models/product.model';
const Row_Height: { [id:number]: number } ={
  1: 400, 3: 355, 4: 350,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  columnCount:number = 3;
  rowHeight = Row_Height[this.columnCount];
  category: string | undefined;
  constructor( private cartService: CartService){

  }
  ngOnInit(): void {
      
  }

  colChange(cols:number): void{
    this.columnCount = cols;
    this.rowHeight = Row_Height[cols]
  }

  categoryUpdate(newCategory: string): void{
    this.category = newCategory;
  }
  onAddToCart(product: Product): void{
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })}

}
