const arr = [1, 2, 3, 4, 5];
console.log(new Array(1, 2, 3, 4, 5));

const arr2 = new Array(5); // [empty × 5]
arr2.fill(1); // [1, 1, 1, 1, 1]

const arr3 = new Array(5);
arr3.fill(1, 0, 3);
console.log(arr3); // [1, 1, 1, empty × 2]
arr3.fill(2, 3, 5);
console.log(arr3); // [1, 1, 1, 2, 2]

// const arr4 = Array.from({ length: 5 }, () => 5);
// console.log(arr4); // [5, 5, 5, 5, 5]

const arr4 = Array.from({ length: 5 }, (cur, i) => i + 1);
console.log(arr4); // [1, 2, 3, 4, 5]