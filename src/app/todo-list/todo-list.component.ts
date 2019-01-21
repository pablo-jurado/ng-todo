import { Component, OnInit, Input } from '@angular/core';
import Todo from '../todo'

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  @Input() todos;
  @Input() filter;

  constructor() {
  }
  
  ngOnInit() {
    console.log(this.filter)
  }

  ngOnChanges(changes) {
    this.filter = changes.filter.currentValue
    console.log('selected', this.filter);
  }
}
