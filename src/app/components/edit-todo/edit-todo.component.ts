import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { todoModel } from 'src/app/models/todoModel';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  constructor(private router: Router,private todoService: TodosService, private fb: FormBuilder) { 
    const navigation = this.router.getCurrentNavigation();
    this.todo = navigation?.extras?.state?.value;
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
    this.newTodoForm.patchValue(this.todo);
  }

  saveTodo(): void {
    const newtodo = this.newTodoForm.value;
    const todoId = this.todo.id;
    this.todoService.saveTodo(newtodo, todoId);
    this.newTodoForm.reset();
}

}
