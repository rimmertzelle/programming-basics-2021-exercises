console.log("JavaScript is working!");

//1. strings
let sentence = 'I am a developer';
let i = 0;
while(i < sentence.length){
    console.log(sentence[i]);
    i++;
}

//2. palindrome
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
