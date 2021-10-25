const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.11];

// EXERCISE 0. Computational Thinking Assignment
/* 
 * Below you will find four different solutions for this exercise. Each of the
 * solutions are functionally correct but are the result of differen design
 * approaches.
 */

// The scentence to decypher
const scentence = "Mfya rpqrhongrrcapmamdixnzg, #i1se tgwebtdt;iunpgb rbwejtktserrm lbzy6 ftmhles edtaiyo!";

// SOLUTION 1: using a loop
function decypher1(scentence) {
  // 1. Get the scentence (by requiring it as a parameter)
  let result = '';
  // 2. Loop through all the characters in the scentence
  for (let i = 0; i < scentence.length; i++) {
    // 3. Determine if the index is even
    if (i % 2 === 0) {
      // 4. Collect the result in a variable
      result += scentence.charAt(i);      
    }
  }  
  // 5. Return the result variable
  return result;
}

console.log(`The decyphered scentence using solution 1 is: ${decypher1(scentence)}`);

// SOLUTION 2: combining loop and odd-even detection
function decypher2(scentence) {
  // 1. Get the scentence (by requiring it as a parameter)
  let result = '';
  // 2. Loop through all the even characters in the scentence
  for (let i = 0; i < scentence.length; i+=2) {
    // 3. Collect the result in a variable
    result += scentence.charAt(i);      
  }  
  // 4. Return the result variable
  return result;
}

console.log(`The decyphered scentence using solution 2 is: ${decypher2(scentence)}`);

// SOLUTION 3: using a 'top-down design using functions' approach
function decipherChar(character, index) {
  // 1. Get the character to be decyphered. We also need the index, so we require
  //    them both as parameters.
  // 2. Determine if the index is even
  if (index % 2 == 0) {
    // 3a. If so, return the character (and quit this function)
    return character;
  }
  // 3b. Else return empty string
  return '';
}

function decypher3(scentence) {
  // 1. Get the scentence (by requiring it as a parameter)
  let result = '';
  // 2. Loop through all the characters in the scentence
  for (let i = 0; i < scentence.length; i++) {
    // 3. Collect the decyphered character in a variable
    result += decipherChar(scentence.charAt(i), i);
  }  
  // 4. Return the result variable
  return result;
}

console.log(`The decyphered scentence using solution 3 is: ${decypher3(scentence)}`);

// SOLUTION 4: using arrays, higher order and other array functions
function decypher4(word) {
  // 1. Get the scentence (by requiring it as a parameter)
  // 2. Return the concatenated values of the filtered array of the string that
  //    is split into the individual characters. The filter only accepts even
  //    indexes. 
  return scentence.split('').filter(function(value, index) {
    return index % 2 === 0;
  }).join('')
}

console.log(`The decyphered scentence using solution 4 is: ${decypher4(scentence)}`);



//1. sum of all prices
const totalSum = function(anArray){
    let totalSum = 0;
    for (let index = 0; index < anArray.length; index++) {
        totalSum = totalSum + anArray[index];
        // index 0: 0 --> 0 + 2.10
        // index 1: 2.10 --> 2.10 + 4.99
        // index 2: 7.09 --> 7.99 + 5.60
        // N
        // 32.79
    }
    return totalSum;
}
console.log(totalSum(productPrices));

//EXERCISE 1. Prices
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

