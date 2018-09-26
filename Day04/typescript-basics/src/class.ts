class Todo {
  task: string;
  done: boolean;
  priority?: number;
  constructor(task: string, done: boolean, priority?: number) {
    this.task = task;
    this.done = done;
    this.priority = priority;
  }
}

let tasks: Todo[] = [];

function addTask(task: string, priority: number): void;
function addTask(task: string, done: boolean, priority?: number): void;
function addTask(
  task: string,
  doneOrPriority: boolean | number,
  priority?: number
) {
  if (typeof doneOrPriority === "number") {
    tasks.push(new Todo(task, false, doneOrPriority));
  } else {
    if (priority) {
      tasks.push(new Todo(task, doneOrPriority, priority));
    } else {
      tasks.push(new Todo(task, doneOrPriority));
    }
  }
}

addTask("first task", true);
addTask("second task", false);
addTask("third task", true, 1);
addTask("fourth task", 1);
