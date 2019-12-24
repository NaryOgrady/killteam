import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class TodoList {
  constructor(eventAggregator) {
    this.status = '';
    this.todos = ['example 1', 'example 2'];
    this.ea = eventAggregator;
  }

  bind() {
    this.ea.subscribe('save todo', newTodo => {
      this.todos.push(newTodo);
    });
  }

  addNewTodo() {
    this.ea.publish('new todo');
  }

  editTodo(index) {
    this.isEditingTodo = true;
    this.isAddingTodo = false;
    this.todoText = this.todos[index];
    this.editIndex = index;
  }
}
