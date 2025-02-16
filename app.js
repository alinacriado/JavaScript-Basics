const cities = {
  msk: {
    temp: {
      celcius: 25
    }
  },
  spb: {

  }
}

console.log(cities.msk.temp.celcius); // 25
console.log(cities.spb.temp); // undefined
// console.log(cities.spb.temp.celcius); // ошибка
console.log(cities.spb?.temp?.celcius); // проверка на наличие, при первом же false возвращает undefined