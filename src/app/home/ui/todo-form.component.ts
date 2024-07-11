import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo } from '../../shared/interfaces.todo';

@Component({
  standalone: true,
  selector: 'app-form',
  template: `
    <form
      [formGroup]="todoForm"
      (ngSubmit)="todoSubmitted.emit(todoForm.getRawValue())"
    >
      <input
        type="text"
        formControlName="todo"
        placeholder="What needs to be done?"
      />
      <input
        type="text"
        formControlName="description"
        placeholder="Description"
      />
      <button type="submit" [disabled]="!todoForm.valid">Add Todo</button>
    </form>
  `,

  imports: [ReactiveFormsModule],
})
export class TodoFormComponent {
  todoSubmitted = output<Todo>();
  private fb = inject(FormBuilder);

  todoForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
  });
}
