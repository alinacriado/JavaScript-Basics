const user = {
  name: 'Anton',
  id: 1,
  roles: ['Admin']
};

// const newUser = user;
// newUser.name = 'newUser';
// console.log(user); // {name: 'newUser', id: 1, roles: Array(1)}
// console.log(newUser); // {name: 'newUser', id: 1, roles: Array(1)}

const newUser2 = {
  ...user
};
newUser2.name = 'newUser';
newUser2.roles.push('user');
console.log(user); // {name: 'Anton', id: 1, roles: Array(2)}
console.log(newUser2); // {name: 'newUser', id: 1, roles: Array(2)}
