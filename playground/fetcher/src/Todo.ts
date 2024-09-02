import { $component, SonnetComponent } from '@sonnetjs/core';

type TodoData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

class Todo extends SonnetComponent {
  data: TodoData[] = [];
  pending: boolean = false;

  public script() {
    this.pending = true;
    this.rerender('#todos');
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        this.data = data;
        this.pending = false;
        this.rerender('#todos');
      });
  }

  public get() {
    return /*html*/ `
    <div>
      <h1>Todo List</h1>
      <ul id="todos">
        ${this.pending ? '<div>Loading...</div>' : ''}
        ${!this.pending && !this.data.length ? '<div>No Data Found</div>' : ''}
        ${this.data.map((todo) => '<li>' + todo.title + '</li>').join('')}
      </ul>
    </div>
    `;
  }
}

export default $component(Todo);
