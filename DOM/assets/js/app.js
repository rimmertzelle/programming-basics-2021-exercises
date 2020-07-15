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
