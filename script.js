const myLibrary = [];
const bookBtn = document.getElementById("book-btn")

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

bookBtn.addEventListener('click', function() {
  const titleInput = prompt("Enter title")
  const authorInput = prompt("Enter Author")
  const pagesInput = prompt("Enter pages")
  const readInput = prompt("Have you read it? yes or no")
  const newBook = new Book(titleInput, authorInput, pagesInput, readInput)
  myLibrary.push(newBook)
  displayLibrary()
})

function displayLibrary() {
  const booksContainer = document.getElementById('books-container')
  booksContainer.innerHTML = ''

  myLibrary.forEach(book => {
    const bookCard = document.createElement('div')
    bookCard.setAttribute('id', 'book-card')
booksContainer.append(bookCard)

    bookCard.innerHTML = 
`Title: ${book.title} <br> Author: ${book.author} 
<br> Page count: ${book.pages} <br> Read: ${book.read}`
  })

}

