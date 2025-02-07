const role = 'manager';

if (role === 'manager') {
  console.log('менеджер');
} else if (role === 'admin') {
  console.log('админ');
} else if (role === 'ceo') {
  console.log('CEO');
} else {
  console.log('Мы тебя не знаем')
}

switch (role) {
  case 'manager': // role === 'manager' (строгое равенство)
    console.log('менеджер');
    break; // чтобы дальше условия не выполнялись
  case 'admin':
    console.log('админ');
    break;
  case 'ceo':
    console.log('CEO');
    break;
  default:
    console.log('Мы тебя не знаем')
}

switch (role) {
  case 'manager': //role === 'manager'
  case 'admin': // без break идет проверка обоих условий
    console.log('Не руководитель');
    break;
  case 'ceo':
    console.log('CEO');
    break;
  default:
    console.log('Мы тебя не знаем')
}

const num = 1;

switch (true) {
  case num > 0: // true === num > 0
    console.log('Положительно');
    break;
  case num < 0:
    console.log('Отрицательно');
    break;
  default:
    console.log('ноль');
}

