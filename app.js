'use strict';

const audi = {
  make: 'Audi',
  model: 'A3',
  year: 2021,
  damages: [],
  addDamage(part, rate) {
    console.log(`У авто ${this.make} поврежден ${part}`);
    this.damages.push({
      part,
      rate
    })
  }
};

const bmw = {
  make: 'BMW',
  model: 'X5',
  year: 2022,
  damages: [],
};

const porche = {
  make: 'Porche',
  model: 'tili',
  year: 2024,
  damages: [],
};

bmw.addDamage = audi.addDamage;
audi.addDamage('Капот', 1);
bmw.addDamage('Капот', 1);

const addDamageFunction = audi.addDamage;

addDamageFunction.call(audi, 'бампер', 2); // назначаем this и передаем аргументы
addDamageFunction.apply(bmw, ['бампер', 2]); // // назначаем this и передаем аргументы

addDamageFunction.call(porche, 'Дверь', 1);
