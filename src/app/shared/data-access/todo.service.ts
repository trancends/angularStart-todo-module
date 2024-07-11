import { Injectable, signal } from '@angular/core';
import { Todo } from '../interfaces.todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // we only want this class to be able to
  // update signal (# makes it private)
  #todos = signal<Todo[]>([]);

  // this can be read only
  todos = this.#todos.asReadonly();

  addTodo(todo: Todo) {
    this.#todos.update((todos) => [...todos, todo]);
  }
}
