const cities = {
  msk: {
    let: 200,
    temp: 25
  },
  spb: {
    let: 100,
    temp: 20
  }
};

// let citiesCount = 0;
let citiesCount = Object.keys(cities).length; // console.log(Object.keys(cities)); // ['msk', 'spb']
let sumTemp = 0;

for (const key in cities) {
  // citiesCount++;
  sumTemp += cities[key].temp;
}

console.log(sumTemp / citiesCount);

for (const key in cities) {
  console.log(key); // msk spb
}

for (const key of Object.keys(cities)) {
  console.log(key); // msk spb
}