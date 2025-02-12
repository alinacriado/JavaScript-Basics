const operations = [100, -20, 7, -30, 50];
let balance = 0;

for (const operation of operations) {
  balance += operation;
}

const finalBalance = operations.reduce((acc, value) => {
  return acc += value;
}, 0);
console.log(finalBalance);
// 0 - acc = 0, value = 100
// 1 - acc = 100, value = -20
// 2 - acc = 80, value = 7 ...

const minElement = operations.reduce((acc, operation) => {
  if (operation > acc) {
    return acc;
  } else {
    return operation;
  }
}, 0);
console.log(minElement);
// 0 - acc = 0, operation = 100; 100 > 0 true; return acc
// 1 - acc = 0, operation = -20; -20 > 0 false; return operation
// 2 - acc = -20, operation = 7; ...