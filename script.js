const myLibrary = [];

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

function addBookToLibrary() {
  const titleInput = prompt("Enter title")
  const authorInput = prompt("Enter Author")
  const pagesInput = prompt("Enter pages")
  const newBook = new Book(titleInput, authorInput, pagesInput)
  myLibrary.push(newBook)
}

addBookToLibrary()
console.log(myLibrary)
