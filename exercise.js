/*
  Напишите функцию camelize(str), которая преобразует строки
  вида «my-short-string» в «myShortString».
  То есть дефисы удаляются, а все слова после них получают заглавную букву.
*/

function camelize(str) {
  return str
    .split('-')
    .map((word, i) =>  {
      return i === 0 ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join('');
}
// console.log(camelize('my-short-string'));

//-------------------------------------------------------------------

/*
  Напишите функцию filterRange(arr, a, b), которая
  принимает массив arr,
  ищет элементы со значениями больше или равными a
  и меньше или равными b и возвращает результат в виде массива.

  Функция должна возвращать новый массив и не изменять исходный.
*/

const arr = [5, 3, 8, 1];

function filterRange(array, a, b) {
  return array.filter(num => num >= a && num <= b);
}

const filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr);

/*
  Напишите функцию filterRangeInPlace(arr, a, b),
  которая принимает массив arr и удаляет из него все значения кроме тех,
  которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

  Функция должна изменять принимаемый массив и ничего не возвращать.
*/

function filterRangeInPlace(array, a, b) {
  array.forEach((num, i) => {
    if (num < a || num > b) {
      array.splice(i, 1);
    }
  });
}

// filterRangeInPlace(arr, 1, 4);
// console.log(array);

//---------------------------------------------------------------

/* Сортировать в порядке по убыванию */

const numbersForSorting = [5, 2, 1, -10, 8];

numbersForSorting.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
});
// numbersForSorting.sort((a, b) => b - a);
// console.log(numbersForSorting);

/*
  У нас есть массив строк arr = ["HTML", "JavaScript", "CSS"]. Нужно получить отсортированную копию, но оставить arr неизменённым.

  Создайте функцию copySorted(arr), которая будет возвращать такую копию.
*/

const languages = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort();
}

const languagesSorted = copySorted(languages);
// console.log('Было: ' + languages);
// console.log('Стало: ' + languagesSorted);

/*
  У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

  Напишите код, который создаст ещё один массив объектов с параметрами id и fullName,
  где fullName – состоит из name и surname.
*/

/* const vasya = { name: "Вася", surname: "Пупкин", id: 1 };
const petya = { name: "Петя", surname: "Иванов", id: 2 };
const masha = { name: "Маша", surname: "Петрова", id: 3 };

const users = [ vasya, petya, masha ];

const usersMapped = users.map(user => ({
  fullName: user.name + ' ' + user.surname,
  id: user.id
}));
console.log(usersMapped); */

/*
  Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age
  и сортирует их по нему.
*/

/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

function sortByAge(array) {
  return array.sort((a, b) => a.age - b.age);
}

sortByAge(users);
console.log(users)
 */

function unique(arr) {
  const newArr = [];
  for (const word of arr) {
    if (!newArr.includes(word)) {
      newArr.push(word);
    }
  }

  return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];
// console.log( unique(strings) );