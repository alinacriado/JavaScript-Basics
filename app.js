const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий';

const template = author + ' заказал ' + projectName;
const template2 = `${author} заказал ${projectName}`;

const template3 = 'Проект \n' + 'Цена: ' + price;
const template4 = `Проект
Цена: ${price}`;

console.log(template);
console.log(template2);
console.log(template3);
console.log(template4);
