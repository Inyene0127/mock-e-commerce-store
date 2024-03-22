import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit{
  constructor(){}
  @Output() categoryChange = new EventEmitter<string>();
  categories:Array<string> = [
    'Tables', 'Accessories', 'TV'
  ]
  ngOnInit(): void {
      
  }

  updateCategory(category: string): void{
    this.categoryChange.emit(category);
  }

}
