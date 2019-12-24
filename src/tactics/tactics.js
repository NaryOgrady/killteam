import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Tactics {
  constructor(eventAggregator) {
    this.isAddingTodo = false;
    this.isEditingTodo = false;
    this.editIndex = 0;
    this.todoText = '';
    this.ea = eventAggregator;
  }

  bind() {
    this.ea.subscribe('new todo', () => {
      this.isAddingTodo = true;
      this.isEditingTodo = false;
      this.todoText = '';
    });
  }

  saveTodo() {
    this.ea.publish('save todo', this.todoText);
  }

  saveEdit() {
    this.todos[this.editIndex] = this.todoText;
  }
}
