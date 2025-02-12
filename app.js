const operations = [100, -20, 7, -10, 50];

// const positiveOperations = [];
// for (const operation of operations) {
//   if (operation > 0) {
//     positiveOperations.push(operation);
//   }
// }
// console.log(positiveOperations); // [100, 7, 50]

const positiveOperations = operations.filter(operation => {
  return operation > 0;
});
console.log(positiveOperations); // [100, 7, 50]

const positiveRUBOperations = operations
  .filter(operation => operation > 0)
  .map(operation => operation * 60);
  console.log(positiveRUBOperations);