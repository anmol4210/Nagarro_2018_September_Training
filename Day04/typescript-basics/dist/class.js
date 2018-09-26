"use strict";
class Todo {
    constructor(task, done, priority) {
        this.task = task;
        this.done = done;
        this.priority = priority;
    }
}
let tasks = [];
function addTask(task, doneOrPriority, priority) {
    if (typeof doneOrPriority === "number") {
        tasks.push(new Todo(task, false, doneOrPriority));
    }
    else {
        if (priority) {
            tasks.push(new Todo(task, doneOrPriority, priority));
        }
        else {
            tasks.push(new Todo(task, doneOrPriority));
        }
    }
}
addTask("first task", true);
addTask("second task", false);
addTask("third task", true, 1);
addTask("fourth task", 1);
