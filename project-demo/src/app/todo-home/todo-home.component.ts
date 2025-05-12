import { Component } from '@angular/core';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
@Component({
  selector: 'app-todo-home',
  imports: [TodoHeaderComponent, TodoCardComponent, AddTodoComponent],
  templateUrl: './todo-home.component.html',
  styleUrl: './todo-home.component.scss'
})
export class TodoHomeComponent {

}
