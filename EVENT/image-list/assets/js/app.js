// wait for the DOM to be loaded
window.addEventListener("load", init);

/**
 * Function to initialise the programme
 */
function init() {
  let imageDiv = document.getElementById("images");
  imageDiv.addEventListener('click',imageClickHandler);
}
/**
 * Function to handle the click event
 * @param {*} event 
 */
function imageClickHandler(event){
  console.log(event.target.src);
}