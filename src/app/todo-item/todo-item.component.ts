import { Component, OnInit, Input, Output, HostListener, HostBinding, EventEmitter } from '@angular/core';
import Todo from '../todo';

@Component({
  selector: 'todo-item',
  host: { 'class': 'item-hover' },
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() todoItemAction = new EventEmitter();

  
  isHovering: boolean;

  constructor() {
    this.isHovering = false;
  }
  
  ngOnInit() {
  }

  @HostListener("mouseover")
  mouseIn() {
    this.isHovering = true;
  }

  @HostListener("mouseout")
  mouseOut() {
    this.isHovering = false;
  }

  toggle(todo) {
    console.log("toggle", todo);
    // { todo: todo, action: "toggle" }
  }

  delete(todo) {
    console.log("delete", todo);
    // { todo: todo, action: "delete" }
  }

  edit(todo) {
    console.log("edit", todo);
    // { todo: todo, action: "edit" }
  }
}
