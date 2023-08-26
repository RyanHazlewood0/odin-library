const myLibrary = [];
const bookBtn = document.getElementById("book-btn")
const bookModal = document.getElementById('book-modal')
const modalForm = document.getElementById('modal-content');

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

bookBtn.addEventListener('click', function() {
  bookModal.style.display = 'block'
})

modalForm.addEventListener('submit', function(event) {

  event.preventDefault()

  const titleInput = document.getElementById('title-input')
  const authorInput = document.getElementById('author-input')
  const pagesInput = document.getElementById('pages-input')
  const readInput = document.getElementById('read-input')

  const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value)
  myLibrary.push(newBook)
  displayLibrary()
   
   titleInput.value = '';
   authorInput.value = '';
   pagesInput.value = '';
   readInput.value = '';

   bookModal.style.display = 'none';
})

function displayLibrary() {

  const booksContainer = document.getElementById('books-container')
    booksContainer.innerHTML = ''

  myLibrary.forEach((book, index) => {

    const bookCard = document.createElement('div')
    bookCard.setAttribute('id', 'book-card')

    bookCard.innerHTML = 
      `Title: ${book.title} <br> Author: ${book.author} 
      <br> Page count: ${book.pages} <br> Read: ${book.read}
      <button class="deleteBtn" data-index="${index}">Delete</button>
      <button>Read</button>`

const deleteBtn = bookCard.querySelector('.deleteBtn')

deleteBtn.addEventListener('click', function() {
  const bookIndex = parseInt(this.getAttribute('data-index'));
  myLibrary.splice(bookIndex, 1);
  displayLibrary();
})


    booksContainer.append(bookCard)

    })
  }



