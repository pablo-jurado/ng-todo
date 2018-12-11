import { Component, OnInit, Input } from '@angular/core';
import Todo from '../todo'

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  @Input() todos;
  constructor() {
  }

  ngOnInit() {
  }
}
