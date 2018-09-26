"use strict";
let todos = [];
function addTodo(todo) {
    if (todo.done) {
        todos.push(todo);
    }
    else {
        todos.unshift(todo);
    }
}
addTodo({ task: "first task", done: true });
addTodo({ task: "second task", done: false });
addTodo({ task: "third task", done: true });
