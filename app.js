const arr = [1, 4, 8, 7, 'hdnjn'];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let element of arr) { // for of итерируется по элементам массива
  console.log(element);
}

for (let index in arr) { // for in итерируется по индексам массива
  console.log(arr[index]);
}