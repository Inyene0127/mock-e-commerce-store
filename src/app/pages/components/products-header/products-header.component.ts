import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnUpdate = new EventEmitter<number>();
  sort:string = 'desc';
  items:number = 2;
  constructor(){}
  ngOnInit(): void {
      
  }
  sortUpdate(updatedSort: string): void{
    this.sort = updatedSort;
  }
  itemsUpdate(count: number){
    this.items = count;
  }
  colsUpdate(updatedCol: number): void{
    this.columnUpdate.emit(updatedCol)
  }

}
