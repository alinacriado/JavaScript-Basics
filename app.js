'use strict';

const audi = {
  make: 'Audi',
  model: 'A3',
  year: 2021,
  damages: []
};

const carManipulation = {
  addDamage(part, rate) {
    this.damages.push({ part, rate });
    console.log(`Добавить повреждение на ${this.make}`);
  }
};

const addDamageAudi = carManipulation.addDamage.bind(audi); // задаем контекст на который потом будет ссылаться this
addDamageAudi('Крыло', 1);
console.log(audi);

const addDamageAudiRoof = carManipulation.addDamage.bind(audi, 'Крыша');
addDamageAudiRoof(5);
addDamageAudiRoof(3);
console.log(audi);


