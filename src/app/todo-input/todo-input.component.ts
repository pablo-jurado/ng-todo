import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.less']
})
export class TodoInputComponent implements OnInit {
  
  todo: string;
  @Output() newTodo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clearInput() {
    this.todo = "";
  }

  onSubmit() {
    if (this.todo) {
        this.newTodo.emit(this.todo);
        this.clearInput();
    }
    return false;
  }
}
