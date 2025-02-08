const users = ['Аня', 'Вика', 'Катя'];
users[2] = 'Кристина'; //замена

//push
users.push('Никита'); // добавить в конец
const arrLength = users.push('Никита'); // операция возвращает длиину массива с добавленным элементом
console.log(arrLength);

//unshift
users.unshift('Вася'); // добавить в начало
const arrLength2 = users.unshift('Никита'); // операция возвращает длиину массива с добавленным элементом
console.log(users);

//pop
users.pop(); // удалить последний элемент
const el = users.pop(); // возвращает удаляемый элемент
console.log(el);
console.log(users);

//shift
users.shift(); // // удалить элемент в начале
const el2 = users.shift(); // возвращает удаляемый элемент
console.log(users);