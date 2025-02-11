const tasks = ['Задача 1'];

const addTask = (task) => {
  tasks.push(task);
}

const removeTaskByName = (taskName) => {
  const taskIndex = tasks.indexOf(taskName);
  if (!tasks.includes(taskName)) {
    return;
  }
  return tasks.splice(taskIndex, 1);
}

const doPriority = (taskName) => {
  const result = removeTaskByName(taskName);
  if (!result) {
    return;
  }
  tasks.unshift(result[0]);
}

addTask('Задача 2');
addTask('Задача 3');
addTask('Задача 4');
console.log(tasks);
removeTaskByName('Задача 7');
console.log(tasks);
doPriority('Задача 4');
console.log(tasks);
