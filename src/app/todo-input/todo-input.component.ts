import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.less']
})
export class TodoInputComponent implements OnInit {
  
  todo: string;
  @Output() newTodoEvent = new EventEmitter();

  ngOnInit() {}

  clearInput() {
    this.todo = "";
  }

  // @HostListener("click") is the same as the following
  // <button (click)="onSubmit()">Add Todo</button>
  // but it is applied to the whole component
  @HostListener("click", ['$event.target'])
  onSubmit(target) {
    console.log("component clicked");
    if (target.type === "submit" && this.todo) {
        console.log("button clicked");
        this.newTodoEvent.emit(this.todo);
        this.clearInput();
    }
    return false;
  }
}
