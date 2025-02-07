const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateWeightCost(presentWeight) {
  return presentWeight * KG_IN_USD;
}

function calculateDistanceCost(distance) {
  return distance * KM_IN_USD;
}

function getExchangePrice(present1, present2, distance) {
  const price1 = calculateWeightCost(present1);
  const price2 = calculateWeightCost(present2);
  const distanceCost = calculateDistanceCost(distance);
  return price1 + price2 + distanceCost;
}