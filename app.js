const money = 100;
const canBuy = money > 50;

if (canBuy) {
  console.log('Могу купить');
}

if (money > 50) {
  console.log('Могу купить');
}

if (money > 50) {
  console.log('Могу купить');
} else {
  console.log('Не могу купить');
}

if (money > 50) {
  console.log('Могу купить');
} else if (money > 5) {
  console.log('Могу купить что-то маленькое');
}
else {
  console.log('Не могу купить');
}
