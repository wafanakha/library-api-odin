const library = [];

function Book(title, author, year, pages, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

function addBook(book) {}

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
