const users = [
  {
    name: 'Вася',
    surname: 'Пупкин',
    age: 30,
    skills: ['разработка', 'DevOps']
  },
  {
    name: 'Катя',
    surname: 'Белова',
    age: 18,
    skills: ['дизайн']
  }
];

const usersChanged = users.map(user => {
  return {
    fullName: `${user.name} ${user.surname}`,
    skillNum: user.skills.length
  };
});
console.log(usersChanged);