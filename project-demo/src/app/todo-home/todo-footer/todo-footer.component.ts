import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  imports: [],
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.scss'
})
export class TodoFooterComponent {
  @Input() remaining = 0;
  @Input() hasCompleted = false;
  @Output() clearCompleted = new EventEmitter<void>();
  
  onClearCompleted(): void {
    this.clearCompleted.emit();
  }
}
