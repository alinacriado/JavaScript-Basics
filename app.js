const fordFocusPrice = 10000;
const budget = 20000;
let message;

if (budget > fordFocusPrice) {
  message = 'Ford';
} else {
  message = 'Велосипед';
}
console.log(`Могу купить ${message}`);
// или
console.log(`Могу купить ${budget > fordFocusPrice ? 'Ford' : 'Велосипед'}`);

//Числа

10 > 0 ? console.log('Больше 0') : console.log('Не больше 0');

if (10 > 0) {
  console.log('Больше 0');
} else {
  console.log('Не больше 0');
}

//Альтернатива

const str = 10 > 0 ? 'Больше 0' : 'Не больше 0'; // строка передается с в переменную
console.log(str);