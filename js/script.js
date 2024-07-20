const container = document.querySelector(".container");
const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: "295",
    read: "not read yet",
  },
  {
    title: "The David",
    author: "J.R.R. Tolkien",
    pages: "2434",
    read: "not read yet",
  },
  {
    title: "The Someone",
    author: "J.R.R. Tolkien",
    pages: "123",
    read: "not read yet",
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = prompt("Title");
  const author = prompt("Author");
  const pages = +prompt("Pages");
  const read = prompt("Read?");

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function createPElement(className, textContent) {
  const div = document.createElement("p");
  div.className = className;
  div.textContent = textContent;
  return div;
}

function createBookElement(book) {
  const card = document.createElement("div");
  card.className = "card";

  const title = createPElement("title", book.title);
  const author = createPElement("author", book.author);
  const pages = createPElement("pages", book.pages);
  const read = createPElement("read", book.read);

  card.append(title, author, pages, read);
  return card;
}

function displayBooksOnTheScreen() {
  myLibrary.forEach((book) => {
    const bookElement = createBookElement(book);
    container.append(bookElement);
  });
}

displayBooksOnTheScreen();
