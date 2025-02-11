// Функции первого порядка - занесена в переменную, передаётся в другую функцию, возвращается из другой функции
function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

// Функция высшего порядка - принимает и/или возвращает другую функцию
function calculate(a, b, fn) { // fn - callback функция (с любым названием)
  const res = fn(a, b);
  return res;
}

console.log(calculate(3, 4, add));