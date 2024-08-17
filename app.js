let command = prompt('what would you like to do?');

const todoList = [];

function addTodo(todo) {
  todoList.push(todo);
  console.log('Todo Added Successfully!');
}

function showTodo() {
  console.log('***************************');
  let count = 1;
  for (let todo of todoList) {
    console.log(`${count}. ${todo}`);
    count++;
  }
  console.log('***************************');
}

function deleteTodo(todoNumber) {
  if (todoList.length >= todoNumber) {
    let index = todoNumber - 1;
    todoList.splice(index, 1);
    console.log('Todo Deleted Successfully!');
  } else {
    console.log(`Todo ${todoNumber} does not exist`);
  }
}

while (command !== 'quit') {
  if (command === 'new') {
    let todo = prompt('Enter new todo!');
    addTodo(todo);
    command = prompt('what would you like to do?');
  } else if (command === 'list') {
    showTodo();
    command = prompt('what would you like to do?');
  } else if (command === "delete") {
    let todoNumber = prompt('Enter todo you want to delete!');
    deleteTodo(todoNumber);
    command = prompt('what would you like to do?');
  } else {
    command = prompt('please enter a valid command!');
  }
}

console.log('APP QUIT!!');
