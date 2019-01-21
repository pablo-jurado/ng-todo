import { Component, OnInit, Input, HostListener } from '@angular/core';
import { TodoService } from "../todo.service";
import Todo from '../todo';

@Component({
  selector: 'todo-item',
  host: { 'class': 'item-hover' },
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  
  isHovering: boolean;
  isEditing: boolean;
  newValue;

  constructor(private todoService: TodoService) {
    this.isHovering = false;
  }
  
  ngOnInit() {
    this.newValue = this.todo.description;
  }

  @HostListener("mouseover")
  mouseIn():void {
    this.isHovering = true;
  }

  @HostListener("mouseout")
  mouseOut():void {
    this.isHovering = false;
  }

  toggle(todo: Todo):void {
    this.todoService.toggle(todo);
  }

  delete(todo: Todo):void {
    this.todoService.delete(todo);
  }

  edit(todo: Todo):void {
    this.todoService.toggleEdit(todo);
  }

  focusOut() {
    this.todoService.saveNewValue(this.todo, this.newValue)
  }
}
