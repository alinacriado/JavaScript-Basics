const arr = ['!', 'JS', 'люблю', 'Я'];
let arrayReversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
  arrayReversed.push(arr[i]);
}

console.log(arrayReversed.join(' '));