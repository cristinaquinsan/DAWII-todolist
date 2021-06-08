import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { todoModel } from 'src/app/models/todoModel';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

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
