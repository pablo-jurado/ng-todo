import { Component, OnInit, Input } from '@angular/core';
import Todo from '../todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo; 

  constructor() {
   }

  ngOnInit() {
  }

  toggle() {
    this.todo.toggle();
  }
}
