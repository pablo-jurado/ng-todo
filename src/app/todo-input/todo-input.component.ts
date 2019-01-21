import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'
import { FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.less']
})
export class TodoInputComponent  {
  myForm: FormGroup;

  constructor(private todoService: TodoService, FormBuilder: FormBuilder) {
    this.myForm = FormBuilder.group({
      'description': ''
    });
  }

  onSubmit(input) {
    if (input.description) {
      this.todoService.add(input.description)
      this.myForm.reset()
    }
    return false;
  }
}
