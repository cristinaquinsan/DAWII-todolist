import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { todoModel } from '../models/todoModel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todosObservable: Observable<todoModel[]>;

  todosCollection: AngularFirestoreCollection<todoModel>;

  constructor(private readonly afs: AngularFirestore) {
    this.todosCollection = afs.collection<todoModel>('todos');
    this.getTodos();
  }

  deleteTodo(todoId: string): Promise<void> {
    return new Promise(async(resolve,reject) => {
      try{
        const res = await this.todosCollection.doc(todoId).delete();
        resolve(res); 
      }catch (err){
        reject(err.message);
      }
    });
  }
  saveTodo(todo: todoModel, todoId: string): Promise<void> {

    return new Promise(async (resolve, reject) => {
      try {
        const id = todoId || this.afs.createId();
        const data = { id, ...todo }; //... devuelve todos los elementos de un array
        const res = await this.todosCollection.doc(id).set(data);
        resolve(res);
      } catch (err) {
        reject(err.message)
      }
    });
  }
  getTodos(): void {
    this.todosObservable = this.todosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as todoModel))
    );
  }
}
