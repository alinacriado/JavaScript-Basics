const wareHouse = {
  goods: [],
  findGoodById: function (id) {
    return this.goods.find(el => el.id === id);
  },
  addGood: function (product) {
    // const existedProduct = this.goods.find(el => el.id === product.id);
    const existedProduct = this.findGoodById(product.id);
    if (existedProduct) {
      return;
    }
    this.goods.push(product);
  },
  getWeightKg: function () {
    // return this.goods.reduce((acc, product) => {
      // if (product.weight?.kg === undefined) {
      //   return acc;
      // }
      // return acc += product.weight.kg;
    // }, 0);
    return this.goods.reduce((acc, product) => {
      return acc += product.weight?.kg ? product.weight.kg : 0;
    }, 0);
  }
};

// товары
const car = {
  id: 1,
  weight: {
    kg: 1000
  },
  brand: 'Ford'
};

const chair = {
  id: 2,
  weight: {
    kg: 2
  }
};

const paper = {
  id: 3,
  color: 'red'
};

wareHouse.addGood(car);
wareHouse.addGood(chair);
wareHouse.addGood(car);
wareHouse.addGood(paper);
console.log(wareHouse);
console.log(wareHouse.findGoodById(4));
// wareHouse.findGoodById(4);
console.log(wareHouse.getWeightKg());
