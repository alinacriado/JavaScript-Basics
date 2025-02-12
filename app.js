const users = ['Вася', 'Маша', 'Катя', 'Аня'];
console.log(users); // ['Вася', 'Маша', 'Катя', 'Аня']
users.sort();
console.log(users); // ['Аня', 'Вася', 'Катя', 'Маша']

const operations = [100, -300, -100, 50, 480];
console.log(operations); // [100, -300, -100, 50, 480]
operations.sort();
console.log(operations); // [-100, -300, 100, 480, 50] - отсортировались как строки

//return < 0 - a, b - сохраняем порядок
//return > 0 - b, a - меняем порядок
operations.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
});
// operations.sort((a, b) => a - b);
console.log(operations); // [-300, -100, 50, 100, 480] - сортировка по возрастанию

operations.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
});

console.log(operations); // [480, 100, 50, -100, -300]