console.log('JavaScript is working!!');

// Here are the references to DOM elements and store them in variables
const button = document.querySelector("#convert-button");
const myInput = document.querySelector('[name="celcius"]');
const myOutput = document.querySelector('#fahrenheit');

// Here is the handler function
function myHandler() {
    console.log("Ouch! You clicked me.");
    const celcius = myInput.value;
    console.log(celcius);
    const fahrenheit = celcius * 1.8 + 32;
    myOutput.innerText = fahrenheit;
}

// Here the handler function is registered to the click event
button.addEventListener("click", myHandler);