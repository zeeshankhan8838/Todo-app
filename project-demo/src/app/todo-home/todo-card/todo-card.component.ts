import { Component, effect, EventEmitter, inject, Input, Output } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../interfaces/todo.interface';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-card',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
  @Input() todo!: Todo;
  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Todo>();
  
  isEditing = false;
  editText = '';
  
  get titlePart(): string {
    return this.todo.title.split(' - ')[0];
  }
  
  get datePart(): string {
    const parts = this.todo.title.split(' - ');
    return parts.length > 1 ? `- ${parts[1]}` : '';
  }
  
  onToggle(): void {
    this.toggle.emit(this.todo.id);
  }
  
  onDelete(): void {
    this.delete.emit(this.todo.id);
  }
  
  startEdit(): void {
    this.isEditing = true;
    this.editText = this.titlePart;
    // In a real app, we would use ViewChild to focus the input
  }
  
  saveEdit(): void {
    if (this.isEditing) {
      if (this.editText.trim()) {
        const now = new Date();
        const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
        this.edit.emit({
          ...this.todo,
          title: `${this.editText} - ${formattedDate}`
        });
      }
      this.isEditing = false;
    }
  }
}