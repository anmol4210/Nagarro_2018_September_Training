interface ITodo {
  task: string;
  done: boolean;
}
let todos: ITodo[] = [];

function addTodo(todo: ITodo) {
  if (todo.done) {
    todos.push(todo);
  } else {
    todos.unshift(todo);
  }
}

addTodo({ task: "first task", done: true });
addTodo({ task: "second task", done: false });
addTodo({ task: "third task", done: true });
