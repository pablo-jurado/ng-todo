import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import Todo from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng Todo App';
  allTodos: Todo[];

  constructor(private todoService: TodoService) {
    this.allTodos = this.todoService.todos;
  }
}
