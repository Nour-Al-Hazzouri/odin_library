const myLibrary = [];

function Book(id, title, author, year, read) {
  // the constructor...
  if (!new.target) {
    throw Error("Ensure to use 'new' when creating instances.");
  }
  this.id = id;
  this.title = title;
  this.author = author;
  this.year = year;
  this.read = read;
}

function addBookToLibrary(id, title, author, year, read) {
  // take params, create a book then store it in the array
  const book = new Book(id, title, author, year, read);
  myLibrary.push(book);
}

addBookToLibrary(crypto.randomUUID(), "theHobbit", "JD. Vance", 2010, "Yes");
addBookToLibrary(crypto.randomUUID(), "theHobbit", "JD. Vance", 2010, "Yes");
addBookToLibrary(crypto.randomUUID(), "theHobbit", "JD. Vance", 2010, "Yes");

const myTable= document.querySelector("#myTable tbody");
myTable.innerHTML = myLibrary.map(book => `<tr><td>${book.id}</td><td>${book.title}</td><td>${book.author}</td><td>${book.year}</td><td>${book.read}</td></tr>`).join('');
