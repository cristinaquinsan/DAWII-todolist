import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { todoModel } from '../../models/todoModel'
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  todos = this.todosService.todosObservable;
  inputTodo: string = "";
  inputPriority: number;
  inputDate: string;
  inputStatus: string;
  filteredCompleted: string[]

  constructor(private router: Router, private todosService: TodosService) { }

  ngOnInit(): void { }

  async deleteToDo(id): Promise<void> {
    try {
      await this.todosService.deleteTodo(id);
    } catch (err) {
      console.log(err);
    }
  }

}

