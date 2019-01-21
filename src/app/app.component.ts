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
  filterValue: string;

  constructor(private todoService: TodoService) {
    this.todoService.getAll().subscribe(data => this.allTodos = data)
  }

  updateFilter(value) {
    this.filterValue = value;
  }
}
