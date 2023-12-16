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
let bookRemoveBtn = "";

function addBook(book) {
  const author = book.elements["author"].value;

  const title = book.elements["title"].value;

  const year = book.elements["year"].value;

  const pages = book.elements["pages"].value;

  const read = book.elements["read"].checked;

  var card = new Book(title, author, year, pages, read);

  library.push(card);

  showBtn.remove();
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
  const books = document.querySelectorAll(".shelf-book");
  books.forEach((e) => e.remove());

  library.forEach((element, index) => {
    const book = document.createElement("div");
    book.classList.add("shelf-book");

    const titleNode = document.createTextNode(element.title);
    const title = document.createElement("h1");
    title.append("Title: ");
    title.appendChild(titleNode);
    book.appendChild(title);

    const authorNode = document.createTextNode(element.author);
    const author = document.createElement("h2");
    author.append("Author: ");
    author.appendChild(authorNode);
    book.appendChild(author);

    const pagesNode = document.createTextNode(element.pages);
    const pages = document.createElement("h3");
    pages.append("Pages: ");
    pages.appendChild(pagesNode);
    book.appendChild(pages);

    const yearNode = document.createTextNode(element.year);
    const year = document.createElement("h3");
    year.append("Year: ");
    year.appendChild(yearNode);
    book.appendChild(year);

    let readNode;
    element.read
      ? (readNode = document.createTextNode("Have read"))
      : (readNode = document.createTextNode("Unread"));
    const read = document.createElement("h3");
    read.appendChild(readNode);
    book.appendChild(read);

    const readChange = document.createElement("button");
    readChange.appendChild(document.createTextNode("Check"));
    book.appendChild(readChange);
    readChange.addEventListener("click", () => {
      element.read = !element.read;
      libraryShow(library);
    });

    bookRemoveBtn = document.createElement("button");
    bookRemoveBtn.appendChild(document.createTextNode("Remove Book"));
    book.appendChild(bookRemoveBtn);
    bookRemoveBtn.addEventListener("click", () => {
      library.splice(index, 1);
      libraryShow(library);
    });

    shelf.appendChild(book);
    shelfLook();
  });

  if (document.querySelector("#show") != null) {
    document.querySelector("#show").remove();
  }
  const newShow = document.createElement("button");
  newShow.appendChild(document.createTextNode("Add Book"));
  newShow.setAttribute("id", "show");
  shelf.appendChild(newShow);
  newShow.addEventListener("click", () => dialog.showModal());
}

function shelfLook() {
  const libraryDiv = document.querySelector(".library");
  libraryDiv.classList.add("library-shelf");
}
