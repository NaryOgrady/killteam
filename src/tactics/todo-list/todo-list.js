export class TodoList {
  constructor() {
    this.status = '';
    this.todos = ['example 1', 'example 2'];
  }

  addNewTodo() {
    this.isAddingTodo = true;
    this.isEditingTodo = false;
    this.todoText = '';
  }

  editTodo(index) {
    this.isEditingTodo = true;
    this.isAddingTodo = false;
    this.todoText = this.todos[index];
    this.editIndex = index;
  }
}
