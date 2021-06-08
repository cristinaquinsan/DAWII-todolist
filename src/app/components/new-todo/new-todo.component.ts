import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { todoModel } from 'src/app/models/todoModel';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  constructor(private todoService: TodosService, private fb: FormBuilder) {
    this.newTodoForm = this.fb.group({
      content: '', 
      priority: '',
      date: '',
      status: ''
    });
  }
  todo: todoModel;
  newTodoForm: FormGroup;

  ngOnInit(): void {
  }

  saveTodo(): void {
      const newtodo = this.newTodoForm.value;
      this.todoService.saveTodo(newtodo, null);
      this.newTodoForm.reset();
  }


}
