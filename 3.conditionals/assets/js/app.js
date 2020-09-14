//BMI

const height = 1.89;
const weight = 94;
const bmi = Math.round(weight / (height * height) * 10) / 10; 
//bmi.toFixed(2);

console.log(bmi);

if (bmi < 18.5) {
    console.log('under weight');

} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log('normal weight');

} else if (bmi >= 25 && bmi <= 29.9) {
    console.log('slightly over weighted');

} else if (bmi >= 30) {
    console.log('Obese');

} else {
    console.error('something went wrong');
}