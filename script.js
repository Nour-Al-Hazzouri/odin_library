// Array to store books
const myLibrary = [];

// Counter for displaying added book in table
let booksAdded = 0;

// Object to create new books
function Book(title, author, year, read) {
  if (!new.target) {
    throw Error("Ensure to use 'new' when creating instances.");
  }
  const UUID = crypto.randomUUID();
  this.id = UUID;
  this.title = title;
  this.author = author;
  this.year = year;
  this.read = read;
}

// Function to add new created books into the library array
function addBookToLibrary(title, author, year, read) {
  const book = new Book(title, author, year, read);
  myLibrary.push(book);
}

// Receive user inputted books
const dialog = document.querySelector("#form-dialog");
const form = document.querySelector("form");
form.addEventListener("submit", extractBook);
function extractBook(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const formData = Object.fromEntries(data.entries());
  addBookToLibrary(
    formData.title,
    formData.author,
    formData.year,
    formData.read,
  );
  addBookToTable(myLibrary);
}

// Function to add each table row
const tBody = document.querySelector("#data");
function addBookToTable(bookElement) {
  const tr = document.createElement("tr");
  tr.setAttribute("data-id", `${bookElement[booksAdded].id}`);
  const transformedBook = `<td>${bookElement[booksAdded].title} 
  <button data-delete>Delete</button></td>
  <td>${bookElement[booksAdded].author}</td>
  <td>${bookElement[booksAdded].year}</td>
  <td>${bookElement[booksAdded].read} <button data-read>Change</button></td>`;
  tr.innerHTML = transformedBook;
  tBody.appendChild(tr);
  booksAdded += 1;
  eventExecution();
}

// Create the deleteRow function
function deleteRow(e) {
  const selectedRow = e.target.closest("tr").getAttribute("data-id");
  const rowToDelete = document.querySelector(`[data-id="${selectedRow}"]`);
  rowToDelete.remove();
}

// Prototype method to change read status
Book.prototype.changeRead = function () {
  if (this.read == "Yes") {
    this.read = "No";
  } else {
    this.read = "Yes";
  }
};

// Create function to change read status in table
function changeReadStatus(e) {
  const target = e.target.closest("tr").getAttribute("data-id");
  let readStatus;
  for (let book of myLibrary) {
    if (book.id == target) {
      book.changeRead();
      readStatus = book.read;
    }
  }
  const selectedButton = e.target;
  selectedButton.closest("td").innerHTML =
    `${readStatus} <button data-read>Change</button>`;
  eventExecution();
}

// Logic to add event listener to each button in the table
function eventExecution() {
  const buttons = document.querySelectorAll("tbody button");
  buttons.forEach((button) => {
    if (button.hasAttribute("data-delete")) {
      button.addEventListener("click", deleteRow);
    } else if (button.hasAttribute("data-read")) {
      button.addEventListener("click", changeReadStatus);
    }
  });
}
