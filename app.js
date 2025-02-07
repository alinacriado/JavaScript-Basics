function powerOfTwo(number) {
  return number * number;
}
console.log(powerOfTwo(5));

const poft = (num) => num * num;

const poft2 = num => num * num;

const poft3 = num => {
  console.log(num);
  return num * num;
};

const poft4 = (num, i) => num * i;

console.log(poft(5));