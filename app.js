const user = {
  name: 'Вася',
  surname: 'Пупкин',
  age: 30,
  // getFullName: function () {
  //   return user.name + ' ' + user.surname;
  // } не надежна при смене наименования
  getFullName: function () {
    console.log(this); // получим исходный объект
    return this.name + ' ' + this.surname;
  }
};

// const getFullName = function (user) {
//   return user.name + ' ' + user.surname;
// };

console.log(user.getFullName());