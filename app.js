const arr = [2, 4, 4, 10];

const avg = arr.reduce((acc, num, i) => {
  if (i != arr.length - 1) {
    return acc + num;
  } else {
    return (acc + num) / arr.length;
  }
}, 0);

console.log(avg);