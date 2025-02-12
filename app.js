const arr = [2, 4, 4, 10, 20];

function some(array, num) {
  if (array.find(el => el === num)) {
    return true;
  } else {
    return false;
  }
}

console.log(some(arr, 0));

console.log(arr.some(el => el === 3)); // готовый метод some, проверяет наличие