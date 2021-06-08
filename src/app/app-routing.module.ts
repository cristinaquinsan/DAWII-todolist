import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';

const routes: Routes = [
  { path:'', component: TodosComponent},
  {path:'newtodo', component: NewTodoComponent},
  {path:'edittodo', component: EditTodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
