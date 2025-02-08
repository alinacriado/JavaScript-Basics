const tasks = ['Задача 1'];

const addTask = (task) => {
  tasks.push(task);
}

const removeTaskByName = (taskName) => {
  if (tasks.includes(taskName)) {
    const taskIndex = tasks.indexOf(taskName);
    tasks.splice(taskIndex, 1);
  } else {
    return;
  }
}

const doPriority = (taskName) => {
  if (tasks.includes(taskName)) {
    const taskIndex = tasks.indexOf(taskName);
    tasks.splice(taskIndex, 1);
    tasks.unshift(taskName);
  } else {
    return;
  }
}

addTask('Задача 2');
addTask('Задача 3');
addTask('Задача 4');
console.log(tasks);
removeTaskByName('Задача 3');
console.log(tasks);
doPriority('Задача 4');
console.log(tasks);
