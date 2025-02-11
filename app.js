const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];

for (let i = 0; i < tasks.length; i++) {
  console.log(tasks[i]);
}
console.log('---------')
for (let i = 0; i < tasks.length; i++) {
  if (tasks[i] === 'Задача 2') {
    continue; // проскакивает и переходит к следующему
  }
  console.log(tasks[i]); // Задача 1, Задача 3
}
console.log('---------')
for (let i = 0; i < tasks.length; i++) {
  if (tasks[i] === 'Задача 2') {
    break; // заканчивает работу цикла
  }
  console.log(tasks[i]); // Задача 1
}