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
  this.read = modalForm[3].checked ? "Read" : "Not read";
}

function createPElement(className, textContent) {
  const p = document.createElement("p");
  p.className = className;
  p.textContent = textContent;
  return p;
}

function createBookElement(book, dataAttributeCounter) {
  const card = document.createElement("div");
  card.className = "card";

  const title = createPElement("title", '"' + book.title + '"');
  const author = createPElement("author", book.author);
  const pages = createPElement("pages", book.pages + " pages");

  const read = document.createElement("button");
  read.className =
    book.read === "Read"
      ? (read.className = "checkbox read")
      : (read.className = "checkbox not-read");
  read.textContent = book.read;

  const remove = document.createElement("button");
  remove.className = "remove";
  remove.setAttribute("data-id", dataAttributeCounter);
  remove.textContent = "Remove";

  card.append(title, author, pages, read, remove);
  return card;
}

function addBookToLibrary(modalForm) {
  const newBook = new Book(modalForm);
  myLibrary.push(newBook);
}

function displayBooksOnTheScreen() {
  let dataAttributeCounter = 0;
  myLibrary.forEach((book) => {
    const bookElement = createBookElement(book, dataAttributeCounter);
    dataAttributeCounter++;
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
container.addEventListener("click", (event) => {
  if (event.target.classList[0] == "checkbox") {
    const index = event.target.parentNode.children[4].getAttribute("data-id");

    if (event.target.classList[1] === "not-read") {
      event.target.classList.remove("not-read");
      event.target.classList.add("read");
      event.target.textContent = "Read";

      myLibrary[index].read = "Read"
    } else {
      event.target.classList.remove("read");
      event.target.classList.add("not-read");
      event.target.textContent = "Not read";
      
      myLibrary[index].read = "Not read"
    }
  }
  if (event.target.className === "remove") {
    const index = event.target.getAttribute("data-id");
    myLibrary.splice(index, 1);
    deleteCardsFromScreen();
    displayBooksOnTheScreen();
  }
});
