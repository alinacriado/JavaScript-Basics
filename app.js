// Деструктуризация

// const arr = [1, 2, 3];
// const [x, y, z] = arr;
// console.log(x)

let user = {
  name: 'Vasia',
  age: 40,
  city: 'Moscow'
};

const { name, city } = user;
console.log(name);
console.log(city);

// rest
const { age, ...UserWithoutAge } = user;
console.log(UserWithoutAge); // {name: 'Vasia', city: 'Moscow'}

// spread

const additionalData = {
  skills: ['дизайн', 'разработка'],
  creditCard: '2342546738401522'
};

user = {
  ...user,
  ...additionalData
}
console.log(user)