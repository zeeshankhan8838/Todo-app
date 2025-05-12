import { Injectable, signal } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoList = signal<Todo[]>([]);

  constructor() { }

  updateToDoList(todo:Todo[]){
    this.toDoList.set(todo);
  }
  // Getter
  getTodoList = () => this.toDoList()

}
