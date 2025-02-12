
/*
  Имеется массив изменения цен prices, где внутри
  1й элемент массива является ценой в момент Х,
  2й - ценой в момент Ү.
  Нужно преобразовать данные в массив, где будут отображены
  только положительные изменения цен: [100, 150]
*/

const prices = [[100, 200], [120, 100], [200, 350]];

// const positivePriceChange = prices
//   .filter(price => price[1] > price[0])
//   .map(price => price[1] - price[0]);
//

const positivePriceChange = prices
  .map(product => product[1] - product[0])
  .filter(priceChange => priceChange > 0);

  console.log(positivePriceChange);