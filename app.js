function power(pow) {
  return function (num) {
    return num ** pow;
  }
}

const powerOfTwo = power(2); // powerOfTwo становится функцией возведения в степень 2
console.log(powerOfTwo(6)); // 36

const powerOfThree = power(3);
console.log(powerOfThree(2));

console.log(power(4)(5)); // 5 ** 4