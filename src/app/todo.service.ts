import { Injectable } from '@angular/core';
import Todo from './todo';
import { Observable, of, from } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  todos: Todo[];

  constructor() {
    this.todos = [
      new Todo("code"),
      new Todo("code more"),
      new Todo("repeat")
    ]
  }

  getAll() {
    return of(this.todos);
  }

  add(description: string):void {
    this.todos.unshift(new Todo(description));
  }

  toggle(todo) {
    this.todos.forEach(item => {
      if (item.description === todo.description) {
        item.isDone = !item.isDone
      }
    });
  }

  toggleEdit(todo) {
    this.todos.forEach(item => {
      if (item.description === todo.description) {
        item.edit = !item.edit
      }
    });
  }

  delete(todo) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
  }

  saveNewValue(todo: Todo, newValue: string) {
    this.todos.forEach(item => {
      if (item.description === todo.description) {
        item.description = newValue;
        item.edit = false;
      }
    });
  }
}
