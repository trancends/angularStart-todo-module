import { Component, Input } from '@angular/core';
import { Todo } from '../../shared/interfaces.todo';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  template: `
    <ul>
      @for (todo of todos; track todo.id) {
        <li>
          <a routerLink="/detail/{{ todo.id }}">{{ todo.title }}</a>
        </li>
      } @empty {
        <li>No todos</li>
      }
    </ul>
  `,
  imports: [RouterLink],
})
export class TodoListComponent {
  @Input({ required: true }) todos!: Todo[];
}
