// function logName() {
//   console.log('Моё имя Антон');
// }

// logName();

function logName(name, surname) {
  console.log(`Моё имя ${name} ${surname}`);
}

logName('Alina', 'Bakhvalova');

function countDepositSum(depositInUSD, month, rateInPercent) {
  const sum = depositInUSD * (1 + rateInPercent / 100 / 12) ** month;
  return sum;

  //или
  //return depositInUSD * (1 + rateInPercent / 100 / 12) ** month;
}

const example1 = countDepositSum(2000, 24, 7);
console.log(example1);

const example2 = countDepositSum(1000, 48, 10);
console.log(example2);

console.log(countDepositSum(1000, 24, 12));
