import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.css'
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Output() onAddToCart = new EventEmitter();
  product: Product | undefined = {
    id: 1,
    title: 'TV Stand',
    price: 25000,
    category: 'TV',
    description: 'A beautiful TV stand',
    image: 'assets/images/photo_2024-03-13_11-50-07.jpg'
  }
  
  constructor(){
    
  }
  ngOnInit(): void {
  }
  addToCart(): void{
    this.onAddToCart.emit(this.product);
  }

}
