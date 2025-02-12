const transactionsInUSD = [10, -7, 50, -10, 100];

const transactionsInRUB = [];
for (const transaction of transactionsInUSD) {
  transactionsInRUB.push(transaction * 60);
}
console.log(transactionsInRUB); // [600, -420, 3000, -600, 6000]

const transactionsInRUB2 = transactionsInUSD.map((transaction) => transaction * 60); // map возвращает новый массив

console.log(transactionsInRUB2); // [600, -420, 3000, -600, 6000]