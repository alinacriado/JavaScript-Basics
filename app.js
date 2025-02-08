const roles = ['user', 'admin', 'manager'];

const elIndex = roles.indexOf('admin');
console.log(elIndex);

const elIndex2 = roles.indexOf('superuser');
console.log(elIndex2); // -1 = не найден

console.log(roles.includes('admin'));

if (roles.includes('admin')) {
	console.log('доступ есть');
}