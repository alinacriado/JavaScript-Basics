const result = prompt('Сколько будет 7 + или - 15?');

/* if (Number(result) === 22) {
  console.log('Успех');
} else if (Number(result) === -8) {
  console.log('Успех');
} else if (result === 'Я не робот') {
  console.log('Успех');
} else {
  console.log('Вы робот');
} */

switch (true) {
  case Number(result) === 22:
  case Number(result) === -8:
  case result === 'Я не робот':
    console.log('Успех');
    break;
  default:
    console.log('Вы робот');
}
