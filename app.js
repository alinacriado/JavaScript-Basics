const userName = 'Вася Пупкина';
console.log(userName[0]); // В
console.log(userName.charAt(0)); // В

console.log(userName.length); // 12

console.log(userName.indexOf('а')); // 1
console.log(userName.lastIndexOf('а')); // 11
console.log(userName.indexOf('уп')); // 6
console.log(userName.indexOf('упв')); // -1

console.log(userName.includes('у')); // true

console.log(userName.slice(5)); // Пупкина
console.log(userName.slice(5, 8)); // Пуп
