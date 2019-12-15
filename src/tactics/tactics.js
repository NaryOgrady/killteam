export class Tactics {
  constructor() {
    this.isAddingTodo = false;
    this.isEditingTodo = false;
    this.editIndex = 0;
    this.todoText = '';
    this.todos = ['example 1', 'example 2'];
  }

  saveTodo() {
    this.todos.push(this.todoText);
    this.todoText = '';
    this.isAddingTodo = false;
  }

  saveEdit() {
    this.todos[this.editIndex] = this.todoText;
  }
}
