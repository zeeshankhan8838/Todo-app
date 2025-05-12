import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterType } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-filter-buttons',
  imports: [],
  templateUrl: './todo-filter-buttons.component.html',
  styleUrl: './todo-filter-buttons.component.scss'
})
export class TodoFilterButtonsComponent {
  @Input() currentFilter: FilterType = 'all';
  @Output() filterChange = new EventEmitter<FilterType>();
  
  onFilterChange(filter: FilterType): void {
    this.filterChange.emit(filter);
  }
}
