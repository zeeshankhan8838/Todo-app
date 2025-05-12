import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoHomeComponent } from "./todo-home/todo-home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-demo';
}
