// EXERCISE 1. The DOM as a diagram. Is a model. So, no code here


// EXERCISE 2. Selecting elements
/* 1. Create a variable `pricingBox` and use the `querySelector()` method to assign
 * the DOM element with id `pricing-box` to it. Log the variable to the console 
 * to check if it is the correct element
 */
const pricingBox = document.querySelector('#pricing-box');

console.log(pricingBox)

/* 2. Do the same, but use `getElementById()` method instead. Name the variable 
 * pricingBox2. Notice the difference between the parameters of both methods
 */
const pricingBox2 = document.getElementById('pricing-box');

console.log(pricingBox2)

/* 3. Use a method of your choice to find all the `<section>` elements and assign 
 * them to a variable called `sections`
 */
const sections = document.getElementsByTagName('section');

console.log(sections)

/* 4. Use the `querySelector()` method to find the element with class `card-header` 
 * who is a descendant (child) of the element with id `section-2`. Assign it to 
 * a variable called `tempSectionHeader`
 */
const tempSectionHeader = document.querySelector('#section-2 .card-header')

console.log(tempSectionHeader)

/* 5. Use the `querySelectorAll()` method to find the elements with the `role`  
 * attribute present. Assign the collection to a variable called `roleItems`
 */ 
const navItems = document.querySelectorAll('[role]')

console.log(navItems)

/* 6. Use the `querySelectorAll()` method to find all the child elements of the
 * `<main>` element where the `data-description` attribute has the exact value 
 * of `storage`. Assign the collection to a variable called `storageItems`
 */ 
const storageItems = document.querySelectorAll('main [data-description="storage"]')

console.log(storageItems)

// EXERCISE 3. Reading the content of elements
/* 1. Log the innerHTML of the pricingBox variable from the previous exercise 
 * to the console.
 */
console.log(pricingBox.innerHTML)

/* 2. Log the textContent of the pricingBox variable from the previous exercise 
 * to the console. Notice the difference between the two properties
 */
console.log(pricingBox.textContent)

/* 3. Use a loop (or higher order function) to log the content as text of each 
 * of the elements in storageItems
 */
Array.from(storageItems).forEach(value => {
  console.log(value.textContent)
})

// EXERCISE 4. Updating content and styling
const paragraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt \
  iste magni veniam pariatur incidunt esse dolore molestiae impedit, id natus est modi \
  eveniet maiores obcaecati optio dolores iure repellendus unde?";

let parElement = document.querySelector('#pricing-box p') 
parElement.textContent = paragraph;

parElement.classList.add("text-muted")

// EXERCISE 5. Removing
const sect1 = document.querySelector('#section-1').closest('.col')
sect1.remove()

// EXERCISE 6. Creating tables
window.addEventListener("load", init);

function init() {
  addClassToParagraph();
  //createCalendar(document.getElementById("calendar"), 2020, 7);
  voteForBooks();
}

/**
 * Function to add a class to a paragraph
 */
function addClassToParagraph() {
  const p = document.querySelector("p");
  p.classList.add("intro");
}

function clearElement() {
  const p = document.querySelector("p");
  p.closest("#container").remove();
}

/**
 * Function to create a books table based on an array with book objects
 */
function voteForBooks() {
  const books = [
    {
      author: "Glennon Doyle",
      title: "Untamed",
    },
    {
      author: "Ijeoma Oluo",
      title: "So you want to talk about race",
    },
    {
      author: "Erik Larson",
      title: "The splendid and the vile",
    },
    {
      author: "David Kessler",
      title: "Finding meaning: the sixth state of grieve",
    },
    {
      author: "Samantha Irby",
      title: "Wow, no thank you",
    },
  ];

  // 1. find the reference in the DOM
  const domReference = document.querySelector("table");
  
  // 2. create the elements
  
  // 2.1 table header
  const thead = document.createElement("thead");
  const theaderContent = "<tr><th>Author</th><th>Book</th></tr>";
  thead.innerHTML = theaderContent;

  // 2.2 table body
  const tableContents = []; //array with all the elements of the table
  const tbody = document.createElement("tbody");   
  books.forEach(function(element){
    const tr = document.createElement('tr');
    const tdAuthor = document.createElement('td');
    tdAuthor.innerText = element.author;
    tr.append(tdAuthor);
    const tdTitle = document.createElement('td');
    tdTitle.innerText = element.title;
    tr.append(tdTitle);
    tableContents.push(tr);
  });

  // 3. add (append) the elements
  tbody.append(...tableContents); //spread (...) operator spreads the array in seperate arguments
  domReference.append(thead);
  domReference.append(tbody);
}

// EXERCISE 7. Calendar (EXPERT CHALLENGE)
/**
 * Function to create a calender
 * Based on: https://javascript.info/modifying-document#create-a-calendar
 * @param {*} elem
 * @param {*} year
 * @param {*} month
 */
function createCalendar(elem, year, month) {
  let mon = month - 1; // months in JS are 0..11, not 1..12
  let d = new Date(year, mon);

  let table =
    "<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>";

  // spaces for the first row
  // from Monday till the first day of the month
  // * * * 1  2  3  4
  for (let i = 0; i < getDay(d); i++) {
    table += "<td></td>";
  }

  // <td> with actual dates
  while (d.getMonth() == mon) {
    table += "<td>" + d.getDate() + "</td>";

    if (getDay(d) % 7 == 6) {
      // sunday, last day of week - newline
      table += "</tr><tr>";
    }

    d.setDate(d.getDate() + 1);
  }

  // add spaces after last days of month for the last row
  // 29 30 31 * * * *
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += "<td></td>";
    }
  }

  // close the table
  table += "</tr></table>";

  elem.innerHTML = table;
}

function getDay(date) {
  // get day number from 0 (monday) to 6 (sunday)
  let day = date.getDay();
  if (day == 0) day = 7; // make Sunday (0) the last day
  return day - 1;
}
