const card  = '2342834503458353';
// ************8353

const cardHidden = card.slice(-4).padStart(card.length, '*');
console.log(cardHidden);
