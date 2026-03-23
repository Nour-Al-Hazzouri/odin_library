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
  tr.setAttribute("data-delete", `${bookElement[booksAdded].id}`);
  const transformedBook = `<td>${bookElement[booksAdded].title} 
  <button data-delete="${bookElement[booksAdded].id}">Delete</button></td>
  <td>${bookElement[booksAdded].author}</td>
  <td>${bookElement[booksAdded].year}</td>
  <td>${bookElement[booksAdded].read}</td>`;
  tr.innerHTML = transformedBook;
  tBody.appendChild(tr);
  booksAdded += 1;

  // Logic to add event listener to each button in the table
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (
      button.hasAttribute("data-delete") &&
      !button.hasAttribute("data-ignore")
    ) {
      button.setAttribute("data-ignore", "yes");
      button.addEventListener("click", deleteRow);
    }
  });
}

// Create the deleteRow function
function deleteRow(e) {
  const dataDelete = e.target.getAttribute("data-delete");
  const rowToDelete = document.querySelector(`[data-delete="${dataDelete}"]`);
  rowToDelete.remove();
}
