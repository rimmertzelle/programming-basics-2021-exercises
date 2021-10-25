console.log('JavaScript is working!')

// Part 0. Exercise 1. Harmonic numbers
/**
 * In mathematics, the *n*-th harmonic number is the sum of the reciprocals of 
 * the first *n* natural numbers.
 * 
 * @param {number} n the number of reciprocals to sum 
 * @returns the sum of the reciprocals of the first n natural numbers
 */
function harmonicNumber(n) {
    let i = 0;
    let total = 0;
    do {
        i++;
        total += 1 / i;
    } while (i < n)
    return total;
}

const n = prompt('How many reciprocals?', 1);
const harmonicNumber = harmonicNumber(n);
console.log("Total harmonic number: ", harmonicNumber);



// Part 0. Exercise 2. Palindrome
/**
 * Returns the characters of the specified word in reverse order.
 * 
 * @param {*} word the word to reverse.
 * @returns the reverse of the specified word
 */
function reverse(word) {
    let reversedWord = '';

    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
        console.log(reversedWord);
    }
    return reversedWord;
}

/**
 * Returns `true` if and only if the word is a palindrome. A word is
 * a palindrome when the reversed word equals the original word.
 * 
 * @param {*} word the word to test
 * @returns `true` if and only if the specified word is a palindrome
 */
function isPalindrome(word) {
    let reversedWord = reverse(word);
    return word === reversedWord;
}


// Log if word is a Palindrome
let word = "Ham";

if (isPalindrome(word)) {
    console.log(`${word} is a palindrome`);
} else {
    console.log(`${word} is NOT a palindrome`);
}






// Part 2. Exercise 1. Give some nice name
function giveMeSomeNiceName(animal) {
    let name = '';
    if (animal == 'cat') {
        name = 'Harm'
    } else if (animal == 'dog') {
        name = 'Henk';
    }
    return name;
}

// Part 2. Exercise 2. Pigs
let pig = '🐷';

function pigs(numberOfPigs) {
    let returnSentence = '';
    for (let i = 0; i < numberOfPigs; i++) {
        returnSentence += '🐷';
    }
    return returnSentence + 'Grunt';
}

console.log(pigs(5));

// Part 2. Exercise 3. See bouncing balls
