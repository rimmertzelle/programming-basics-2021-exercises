const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.11];

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

//2. avarage of all prices
const average = function(anArray){
    let newAverage = totalSum(anArray) / anArray.length;
    return newAverage;
};


console.log(average(productPrices));

//3. highestprice using a reduce function
function highestPrice(anArray){
    return anArray.reduce(function(prev, curr, index, array ){
        //if previous val is greater than current val return previous val else current val
        return prev > curr ? prev : curr;
    });
}

console.log(highestPrice(productPrices));

//3. highestprice using a simpler implementation
function largest(arr) {
    let largest = arr[0];
    arr.forEach(function(i) {
      if (i > largest){
        largest = i;
      }
    });
    return largest;
}
console.log(largest(productPrices));