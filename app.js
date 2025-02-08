const roles = ['user', 'admin', 'manager', 'superuser'];

const url = 'auth/user/login';
const res = url.split('/'); // возвращает массив
console.log(res); // ['auth', 'user', 'login']

console.log(roles.join('-')); // user-admin-manager-superuser, возвращает строку
