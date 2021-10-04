const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];
console.log("The prices are: ", productPrices);

// NOTE: each exercise has the answer with a normal loop and with the higher 
// order function combined.

// 1. Calculate the sum of the prices
let sum = 0;
for ( let i = 0; i < productPrices.length; i++ ) {
  sum += productPrices[i];
}
console.log(`The sum of the prices is: ${sum}`);

let sum2 = productPrices.reduce(function(previousValue, currentValue) {
  return previousValue + currentValue;
})
console.log(`The sum of the prices is: ${sum2} (uses higher order function)`);


// 2. Find the lowest price
let lowest;
for ( let i = 0; i < productPrices.length; i++ ) {
  if (!lowest || productPrices[i] < lowest) {
    lowest = productPrices[i];
  }
}
console.log(`The lowest price is: ${lowest}`);

let lowest2 = productPrices.reduce(function(previousValue, currentValue) {
  if (!previousValue || currentValue < previousValue) {
    return currentValue;
  }
  return previousValue;
})
console.log(`The lowest price is: ${lowest2} (uses higher order function)`);


// 3. Create a new array that holds the differences between each price and the lowest prices.
let priceDifferences = [];
for ( let i = 0; i < productPrices.length; i++ ) {
  priceDifferences[i] = productPrices[i] - lowest;
}
console.log(`The price differences are: ${priceDifferences}`);

let priceDifferences2 = productPrices.map(function(value) {
  return value - lowest;
})
console.log(`The price differences are: ${priceDifferences2} (uses higher order function)`);


// 4. Calculate the average price
const average = sum / productPrices.length;
console.log(`The average price is: ${average} (uses higher order function)`);


// 5. Create a new array that only holds the prices that are above the average price
let aboveAverage = [];
for ( let i = 0; i < productPrices.length; i++ ) {
  if (productPrices[i] > average) {
    aboveAverage.push(productPrices[i]);
  }
}
console.log(`The prices above average are: ${aboveAverage}`);

let aboveAverage2 = productPrices.filter(function(value) {
  return value > average;
})
console.log(`The prices above average are: ${aboveAverage2} (uses higher order function)`);


// EXTRA (EXPERT) CHALLENGE
let weird = productPrices.map(function(value) {
  return value * 40.61;
}).filter(function(value) {
  return value >= 50;
}).reduce(function(previousValue, currentValue) {
  return previousValue + currentValue;
});
console.log(`The output: €${weird}`);
