const data = [1, 2, 3, 4, 5, 6];
const [one, two, ...others] = data;
console.log(one, two, others); // 1 2 [3, 4, 5, 6]

// ...others можно использовать только в конце