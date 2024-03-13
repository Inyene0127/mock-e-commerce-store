import { Component, OnInit } from '@angular/core';
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
  constructor(){}
  ngOnInit(): void {
      
  }

  colChange(cols:number): void{
    this.columnCount = cols;
    this.rowHeight = Row_Height[cols]
  }
  // rowChange(row:number): void{

  // }
  categoryUpdate(newCategory: string): void{
    this.category = newCategory;
  }

}
