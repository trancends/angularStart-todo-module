import { Component, inject } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form.component';
import { Todo } from '../shared/interfaces.todo';
import { TodoService } from '../shared/data-access/todo.service';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <h1>Home</h1>
    <app-form (todoSubmitted)="todoService.addTodo($event)" />
  `,
  imports: [TodoFormComponent],
})
export class HomeComponent {
  todoService = inject(TodoService);
}
