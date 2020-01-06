
import { TodoService } from './todo.service';
import {OnInit} from '@angular/core';

export class TodosComponent implements OnInit {
  todos = [];
  message;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe(t => this.todos.push(t));
  }

  add() {
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id) {
    if (confirm('Are you sure?')) {
      this.service.delete(id).subscribe();
    }
  }
}
