const allCheckBoxes = document.querySelectorAll("input[type=checkbox]");

window.addEventListener("load", init);

/**
 * Function to initialize the programme
 * @param {*} event
 */
function init(event) {
  addClassToOddCheckBoxes();

  //add event listener to each checkbox.
  allCheckBoxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", clickHandler);
  });
  writeToTheDOM();
}

/**
 * Function add a class to all odd checkboxes
 */
function addClassToOddCheckBoxes() {
  //try to work with a foreach loop
  for (let i = 0; i < allCheckBoxes.length; i++) {
    if (i % 2 === 0) {
      allCheckBoxes[i].parentNode.classList.add("orange");
    }
  }
}

/**
 * Function to handle the click event.
 * @param {*} event
 */
function clickHandler(event) {
  console.log(event);
  console.log(getCheckedCheckboxes());
  writeToTheDOM();
}

function getCheckedCheckboxes() {
  const checkedBoxes = [];
  for (let i = 0; i < allCheckBoxes.length; i++) {
    if (allCheckBoxes[i].checked == true) {
      checkedBoxes.push(allCheckBoxes[i]);
    }
  }
  return checkedBoxes;
}

/**
 * Function to write an array to the DOM
 */
function writeToTheDOM() {
  const checkedBoxes = getCheckedCheckboxes();
  const domReference = document.getElementById("result");
  domReference.innerHTML = "";
  const ul = document.createElement("ul");
  for (let i = 0; i < checkedBoxes.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = checkedBoxes[i].id;
    console.log(li);
    ul.append(li);
  }
  domReference.append(ul);
}
