import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Todo } from '../../interfaces/todo.interface';
import { TodoCardComponent } from "../todo-card/todo-card.component";
import { TodoFilterButtonsComponent } from '../todo-filter-buttons/todo-filter-buttons.component';
import { TodoFooterComponent } from '../todo-footer/todo-footer.component';
@Component({
  selector: 'app-add-todo',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, TodoCardComponent, TodoFilterButtonsComponent,TodoFooterComponent],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {
  todos: Todo[] = [
    { id: 1, title: '32xc - 5/12/25, 11:12 AM', completed: false }
  ];
  newTodo = '';
  filter: any = 'all';
  
  get filteredTodos(): Todo[] {
    return this.todos.filter(todo => {
      if (this.filter === 'active') return !todo.completed;
      if (this.filter === 'completed') return todo.completed;
      return true;
    });
  }
  
  get remainingCount(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }
  
  get hasCompletedTodos(): boolean {
    return this.todos.some(todo => todo.completed);
  }
  
  addTodo(): void {
    if (this.newTodo.trim()) {
      const now = new Date();
      const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      this.todos.push({
        id: Date.now(),
        title: `${this.newTodo} - ${formattedDate}`,
        completed: false
      });
      this.newTodo = '';
    }
  }
  
  toggleTodo(id: number): void {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
    }
  }
  
  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  
  editTodo(updatedTodo: Todo): void {
    const index = this.todos.findIndex(t => t.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
    }
  }
  
  setFilter(filter: any): void {
    this.filter = filter;
  }
  
  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}