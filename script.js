// Array to store books
const myLibrary = [];

// Object to use to create new books
function Book(id, title, author, year) {
  if (!new.target) {
    throw Error("Ensure to use 'new' when creating instances.");
  }
  this.id = id;
  this.title = title;
  this.author = author;
  this.year = year;
}

// Function to add new created books into the library array
function addBookToLibrary(title, author, year) {
  const book = new Book(crypto.randomUUID(), title, author, year);
  myLibrary.push(book);
}

// Receive user inputted books
const form= document.querySelector('form');
form.addEventListener('submit', extractBook);
function extractBook(e) {
  e.preventDefault();
  const data= new FormData(e.target);
  const formData= Object.fromEntries(data.entries());
  addBookToLibrary(formData.title, formData.author, formData.year);
  addBookToTable(myLibrary);
}

// Function to add each table row
let booksAdded = 0;
const tBody= document.querySelector('#data');
function addBookToTable(bookElement) {
  const tr= document.createElement('tr');
  const transformedBook= `<td>${bookElement[booksAdded].id}</td><td>${bookElement[booksAdded].title}</td><td>${bookElement[booksAdded].author}</td><td>${bookElement[booksAdded].year}</td>`
  tr.innerHTML= transformedBook;
  tBody.appendChild(tr);
  booksAdded += 1;
}