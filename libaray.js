const library = [];

function Book(title, author, year, pages, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

const dialog = document.querySelector("dialog");
const showBtn = document.querySelector("#show");
const closeBtn = document.querySelector("#close");

function addBook(book) {
  const author = book.elements["author"].value;

  const title = book.elements["title"].value;

  const year = book.elements["year"].value;

  const pages = book.elements["pages"].value;

  const read = book.elements["read"].value;

  var card = new Book(title, author, year, pages, read);

  library.push(card);
}

showBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());

const book = document.querySelector("#book");

book.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook(book);
});

function libraryShow(library) {
  library.length < 1 ? "show" : "close";

  library.forEach((element) => {
    const titleNode = document.createTextNode(element.title);
    const title = document.createElement("h1").appendChild(titleNode);

    const authorNode = document.createTextNode(element.author);
    const author = document.createElement("h1").appendChild(authorNode);

    const pagesNode = document.createTextNode(element.pages);
    const pages = document.createElement("h1").appendChild(pagesNode);

    const yearNode = document.createTextNode(element.year);
    const year = document.createElement("h1").appendChild(yearNode);

    const readNode = document.createTextNode(element.read);
    const read = document.createElement("h1").appendChild(readNode);
  });
}
