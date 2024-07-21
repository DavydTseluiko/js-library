const container = document.querySelector(".container");
const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal > form");
const addBookButton = document.querySelector(".add-book");
const submitForm = document.querySelector("#submit");

const myLibrary = [];

function Book(modalForm) {
  this.title = modalForm[0].value;
  this.author = modalForm[1].value;
  this.pages = modalForm[2].value;
  this.read = modalForm[3].value;
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

function addBookToLibrary(modalForm) {
  const newBook = new Book(modalForm);
  myLibrary.push(newBook);
}

function displayBooksOnTheScreen() {
  myLibrary.forEach((book) => {
    const bookElement = createBookElement(book);
    container.append(bookElement);
  });
}

function deleteCardsFromScreen() {
  container.innerHTML = "";
}

displayBooksOnTheScreen();
addBookButton.addEventListener("click", () => modal.showModal());
modal.addEventListener("cancel", () => modalForm.reset());
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modalForm.reset();
    modal.close();
  }
});
submitForm.addEventListener("click", (event) => {
  if (modalForm.checkValidity() === true) {
    event.preventDefault();
    addBookToLibrary(modalForm);
    deleteCardsFromScreen();
    displayBooksOnTheScreen();
    modalForm.reset();
    modal.close();
  }
});
