// Array to store books
const myLibrary = [];

// Object to use to create new books
function Book(id, title, author, year) {
  // the constructor...
  if (!new.target) {
    throw Error("Ensure to use 'new' when creating instances.");
  }
  this.id = id;
  this.title = title;
  this.author = author;
  this.year = year;
}

// Function to add new created books into the library array
function addBookToLibrary(id, title, author, year) {
  // take params, create a book then store it in the array
  const book = new Book(id, title, author, year);
  myLibrary.push(book);
}

// Mock books created to test functionality through function call
addBookToLibrary(crypto.randomUUID(), "Harry Potter", "Trump", 2000);
addBookToLibrary(crypto.randomUUID(), "theHobbit", "JD. Vance", 2010);
addBookToLibrary(crypto.randomUUID(), "William James", "Hillary Clinton", 1998);

// Query to have access over the tbody
const tBody= document.querySelector('#data');

// The initial function to add each table row
function bookTable(bookElement) {
  for (let i= 0; i < bookElement.length; i++) {
    const tr= document.createElement('tr');
    const transformedBook= `<td>${bookElement[i].id}</td><td>${bookElement[i].title}</td><td>${bookElement[i].author}</td><td>${bookElement[i].year}</td>`
    tr.innerHTML= transformedBook;
    tBody.appendChild(tr);
  }
}
bookTable(myLibrary)