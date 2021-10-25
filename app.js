// Create Book Object
function createBook(title, author, isbn) {
  return {
    title,
    author,
    isbn
  }
}

// Get data from user via form input
// Select related objects
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const isbn = document.querySelector('#isbn')
const form = document.querySelector('#book-form')
const bookList = document.querySelector('#book-list')
const table = document.querySelector('table')
const deleteBtn = document.querySelector('.btn-danger')
const searchBox = document.querySelector('.search')
// console.log(submitBtn);

form.addEventListener('submit', (e) => {
  e.preventDefault()

  // create book object
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const bookIsbn = isbn.value
  const book = createBook(bookTitle, bookAuthor, bookIsbn)
  if (!(book.title && book.author && book.isbn)) {

    alert('check fields')
  }
  else {
    // Add book Object to table
    bookList.innerHTML += `<tr>
    <td>${book.title}</td>  
    <td>${book.author}</td>  
    <td>${book.isbn}</td>
    <td><button type="button" class="btn btn-danger">Delete</button></td>    
</tr>`

    bookList.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', (e) => {
        e.target.closest('tr').remove()
      })
    })

    form.reset()
  }

})

// Remove book object From table
// first way
// table.addEventListener('click', (e) => {
//   if (e.target.classList.contains('btn-danger')) {
//     // e.target.parentElement.parentElement
//     e.target.closest('tr').remove()
//   }
// })

// Search Functionality
searchBox.addEventListener('keyup', () => {
  const searchKey = searchBox.value;
  searchBook(searchKey)
})

const searchBook = (keyword) => {

  const allBooks = [...bookList.querySelectorAll('tr')]

  allBooks.forEach((book) => {
    if (!book.children[0].innerText.toLowerCase().includes(keyword.toLowerCase())) {
      book.classList.add('hide')
    }
  });
  allBooks.forEach((book) => {
    if (book.children[0].innerText.toLowerCase().includes(keyword.toLowerCase())) {
      book.classList.remove('hide')
    }
  });

}

