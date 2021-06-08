import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { FilterPipe } from './pipes/filter.pipe'; 
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { SeeTodoComponent } from './components/see-todo/see-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component'; 

/**
 * ANGULAR MATERIAL
 */
import {MatInputModule} from '@angular/material/input'; 
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select'; 

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    FilterPipe,
    NewTodoComponent,
    SeeTodoComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
