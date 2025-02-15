
const user = {
  name: 'Вася',
  surname: 'Пупкин',
  age: 24,
  skills: [
    'програмирование',
    'готовка'
  ],
  educationBasic: 'Школа',
  educationPro: 'МФТИ'
};

console.log(user.name);
console.log(user.skills); // использовать помаксимум
console.log(user['skills']); // для расчетеных или принимаемых
console.log(user.skills[0]); // програмирование

const level = 'Pro';
console.log(user['education' + level]); // МФТИ

const res = 'age';
console.log(user[res]); // 24

user.city = 'Москва'; // новое
// user['city'] = 'Москва'; // новое
console.log(user);

user.age = 30; // перезаписать
// user['age'] = 30; // перезаписать