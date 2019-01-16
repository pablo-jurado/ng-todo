import { Component, HostListener } from '@angular/core';
import Todo from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng Todo App';
  allTodos: Todo[] = [];

  @HostListener("EventEmitter") testing() {
    console.log("testing");
  }

  createNewTodo(description) {
    this.allTodos.unshift(new Todo(description));
    console.log(this.allTodos);
  }
}
