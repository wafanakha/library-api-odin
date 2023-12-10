const library = [];

function Book(title, author, year, pages, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

function addBook(book) {
  document.querySelector(".library h1").remove();
  document.querySelector(".library h2").remove();

  const bookCards = document.createElement("div");
  const author = document.createTextNode(book.elements["author"].value);
  const title = document.createTextNode(book.elements["title"].value);
  const year = document.createTextNode(book.elements["year"].value);
  const pages = document.createTextNode(book.elements["pages"].value);
  bookCards.appendChild(author, title, year, pages);
}

const dialog = document.querySelector("dialog");
const showBtn = document.querySelector("#show");
const closeBtn = document.querySelector("#close");

showBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());

const book = document.querySelector("#book");

book.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(book.elements["year"].value);
});
