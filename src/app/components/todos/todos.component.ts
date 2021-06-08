import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'
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

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(private router: Router, private todosService: TodosService) { }

  ngOnInit(): void { }

  async deleteToDo(id): Promise<void> {
    try {
      await this.todosService.deleteTodo(id);
    } catch (err) {
      console.log(err);
    }
  }

  goToEditToDo(todo: any): void {
    this.navigationExtras.state.value = todo;
    this.router.navigate(['edittodo'], this.navigationExtras);
  }

}

