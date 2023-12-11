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
  console.log(book);
  document.querySelector(".library h1").remove();
  document.querySelector(".library h2").remove();

  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const h32 = document.createElement("h3");

  const divlibrary = document.querySelector(".library");
  const bookCards = document.createElement("div");
  bookCards.classList.add("book");

  const author = book.elements["author"].value;

  const title = book.elements["title"].value;

  const year = book.elements["year"].value;

  const pages = book.elements["pages"].value;

  const read = book.elements["read"].value;

  var card = new Book(title, author, year, pages, read);

  library.push(card);

  bookCards.appendChild(h1);
  bookCards.appendChild(h2);
  bookCards.appendChild(h3);
  bookCards.appendChild(h32);

  divlibrary.appendChild(bookCards);
}

showBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());

const book = document.querySelector("#book");

book.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook(book);
});
