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
  libraryShow(library);
});

function libraryShow(library) {
  const shelf = document.querySelector(".library");
  if (library.length > 0) {
    document.querySelector(".library h1").remove();
    document.querySelector(".library h2").remove();
  }

  library.forEach((element) => {
    const book = document.createElement("div");

    const titleNode = document.createTextNode(element.title);
    const title = document.createElement("h1");
    title.appendChild(titleNode);
    book.appendChild(title);

    const authorNode = document.createTextNode(element.author);
    const author = document.createElement("h2");
    author.appendChild(authorNode);
    book.appendChild(author);

    const pagesNode = document.createTextNode(element.pages);
    const pages = document.createElement("h3");
    pages.appendChild(pagesNode);
    book.appendChild(pages);

    const yearNode = document.createTextNode(element.year);
    const year = document.createElement("h3");
    year.appendChild(yearNode);
    book.appendChild(year);

    const readNode = document.createTextNode(element.read);
    const read = document.createElement("h3");
    read.appendChild(readNode);
    book.appendChild(read);

    console.log(book);
    console.log(shelf);
    shelf.appendChild(book);
  });
}
