const str = 'Вася Пупкина';
console.log(str.includes('а'));
console.log(str.startsWith('В'));
console.log(str.endsWith('н'));
// Не меняют исходную строку
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace('В', 'Ф'));
console.log(str.replace('а', 'и')); // Вися Пупкина
console.log(str.replaceAll('а', 'и')); // Вися Пупкини
console.log(str.replace(/а/g, 'и')); // Вися Пупкини

const str2 = '     Вася Пупкина      ';
console.log(str2);
console.log(str2.trim()); // 'Вася Пупкина'
console.log(str2.trimStart());
console.log(str2.trimEnd());

