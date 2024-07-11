import { Component } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form.component';
import { Todo } from '../shared/interfaces.todo';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <h1>Home</h1>
    <app-form (todoSubmitted)="createTodo($event)" />
  `,
  imports: [TodoFormComponent],
})
export class HomeComponent {
  createTodo(todo: Todo) {
    console.log(todo);
  }
}
