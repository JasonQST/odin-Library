let Library = [];

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary(title, author, pages, haveRead) {
  Library.push(new Book(title, author, pages, haveRead));
}

