import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { TodoService } from "../todo.service";
import Todo from '../todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  @Input() todos;
  @Input() filter;

  constructor(private todoService: TodoService) {
  }
  
  ngOnInit() {
    console.log(this.filter)
  }

  ngOnChanges(changes) {
    this.filter = changes.filter.currentValue
  }

  drop(event: CdkDragDrop<string[]>) {
    this.todoService.moveItem(event.previousIndex, event.currentIndex);
  }
}
