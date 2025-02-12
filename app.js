const prices = [[2, 4], [3, 4], [10, 20]];
const res = prices.flat();
console.log(res); // [2, 4, 3, 4, 10, 20]

const prices2 = [[2, 4], [3, 4], [10, [20, 50]]];
const res2 = prices2.flat();
console.log(res2); // [2, 4, 3, 4, 10, [20, 50]]

const res3 = prices2.flat(2);
console.log(res3); // [2, 4, 3, 4, 10, 20, 50]

const res4 = prices.flatMap(el => el.concat(1)); // prices.map(...).flat();
console.log(res4); // [2, 4, 1, 3, 4, 1, 10, 20, 1]