function powerOfTwo(number) {
  return number * number;
}
console.log(powerOfTwo(5)); // можно также вызвать функцию перед её объявлением

const poft = function (number) {
  return number * number;
}
console.log(poft(8));