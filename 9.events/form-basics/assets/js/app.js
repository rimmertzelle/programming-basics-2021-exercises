// wait for the dom to be loaded
window.addEventListener("load", init);

/**
 * Function to initialise the programme
 */
function init() {
  let submit = document.getElementById("submit");
  submit.addEventListener("click", sumbitHandler);
}
/**
 * Function to handle the sumbit click
 * @param {*} event 
 */
function sumbitHandler(event) {
  event.preventDefault(); //added to prevent the default behavior of submitting a form (=reloading a page)  
  let date = document.getElementById("date").value; //get the value of the date picker
  writeDateToTheDom(date);
}
/**
 * Function to write the chosen date to the DOM
 * @param {*} date 
 */
function writeDateToTheDom(date){
  let reference = document.getElementById("chosenDate");
  let p = document.createElement("p");
  p.innerHTML = date;
  reference.append(p);
}
