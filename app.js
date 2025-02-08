const roles = ['user', 'admin', 'manager', 'superuser'];

const res = roles.slice(2); // с элемента с индексом 2 и до конца
console.log(res); // ['manager', 'superuser']
console.log(roles); // ['user', 'admin', 'manager', 'superuser'] - slice не меняет массив

const res2 = roles.slice(2, 3); // с элемента с индексом 2 до элемента с индексом 3 (элемент с конечным индексом не включён)
console.log(res2); // ['manager']

const res3 = roles.slice(-1); // последний элемент
const res4 = roles.slice(-2); // 2 последних элемента

const res5 = roles.splice(2);
console.log(res5); // ['manager', 'superuser']
console.log(roles); // ['user', 'admin'] - splice отрезает кусок от начального массива

const res6 = roles.splice(2, 3); // // с элемента с индексом 2 берет 3 элемента

const res7 = roles.slice(-1); // отрежет последний элемент

roles.reverse(); // переворачивает массив

const newRoles = ['sysadmin', 'developer'];
roles.concat(newRoles); // соединяет массивы