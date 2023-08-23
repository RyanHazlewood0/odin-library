const myLibrary = [];
const bookBtn = document.getElementById("book-btn")

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

bookBtn.addEventListener('click', function() {
  const titleInput = prompt("Enter title")
  const authorInput = prompt("Enter Author")
  const pagesInput = prompt("Enter pages")
  const newBook = new Book(titleInput, authorInput, pagesInput)
  myLibrary.push(newBook)
  displayLibrary()
})

function displayLibrary() {
  const booksContainer = document.getElementById('books-container')
  booksContainer.innerHTML = ''

  myLibrary.forEach(book => {
booksContainer.innerHTML = 
`Title: ${book.title}, Author: ${book.author}, Page count: ${book.pages} `
  })

}

