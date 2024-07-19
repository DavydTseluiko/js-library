const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBookToLibrary() {
  const title = prompt("Title");
  const author = prompt("Author");
  const pages = +prompt("Pages");
  const read = prompt("Read?");

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary();
