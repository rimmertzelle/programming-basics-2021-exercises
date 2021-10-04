console.log('JavaScript is working!');

//1. Basic series
// First series: 0 1 3 6 10 15 21 28 ...
let a = 0
for (let i=0; i<10; i++) {
    a += i;
    console.log(a)
}

// Second series: 1 2 4 8 16 32 64 128 ...
let n=0;
do {
    console.log(2 ** n++);
} while(n<32)

//2. Altering code
const start = 0;
const end = 100;
let total = 0;
 
for (let i = start; i <= end; i++) {
  if (i % 2 == 0) {
    total += i;
  }
}
console.log(total);

//3. Harmonic numbers
n = 2000;
let i = 0;
total = 0;
do {
    i++;
    total += 1/i;
} while (i<n)
console.log("Total harmonic number: ", total);

//4. strings
// First exercise: forward
let sentence = 'I am a developer';
i = 0;
while(i < sentence.length){
    console.log(sentence[i]);
    i++;
}
// Second exercise: reverse
i = sentence.length-1;
while(i >= 0){
    console.log(sentence[i]);
    i--;
}


//5. palindrome
let word = "Ham";
let reversedWord = '';

for (let i = word.length-1; i >= 0; i--) {
  reversedWord += word[i];
  console.log(reversedWord);
}
console.log(reversedWord);
if (word == reversedWord) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} is NOT a palindrome`);
}
