import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../shared/data-access/todo.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  selector: 'app-detail',
  template: `
    @if (todo(); as todo) {
      <h1>{{ todo.title }}</h1>
      <p>{{ todo.description }}</p>
    } @else {
      <h1>Todo not found.</h1>
    }
  `,
})
export class DetailComponent {
  route = inject(ActivatedRoute);
  private todoService = inject(TodoService);

  private paramMap = toSignal(this.route.paramMap);

  todo = computed(() =>
    this.todoService
      .todos()
      .find((todo) => todo.id === this.paramMap()?.get('id')),
  );
}
