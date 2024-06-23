const addBook = document.querySelector('.addBook');
const form = document.getElementById('form');
const containerBook = document.querySelector('.container-book')
const deleteAll = document.querySelector('.trashBook')

// Event listener to prevent form submission and call addBookToLibrary
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
});

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

const clear = () => {
    const titleBook = document.getElementById('title').value = '';
    const authorBook = document.getElementById('author').value = '';
    const pagesBook = document.getElementById('pages').value = '';
    const readBook = document.getElementById('readCheckbox').checked = false;
}

const addBookToLibrary = () => {
    const titleBook = document.getElementById('title').value;
    const authorBook = document.getElementById('author').value;
    const pagesBook = document.getElementById('pages').value;
    const readBook = document.getElementById('readCheckbox').checked;

    const book = new Book(titleBook, authorBook, pagesBook, readBook);
    myLibrary.push(book)
    displayBook()
    clear()
};

const removeBook = (index) => {
    myLibrary.splice(index, 1)
    displayBook()
}

const displayBook = () => {
    containerBook.innerHTML = ''
    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <div class="title">${book.title}</div>
            <div class="author">${book.author}</div>
            <div class="pages">${book.pages} pages</div>
            <div class="read">
                <label class="readBook" for="read${index}">Read</label>
                <input type="checkbox" name="read" id="read${index}" ${book.read ? 'checked' : ''}>
            </div>
            <div class="close" onclick="removeBook(${index})">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
        `;
        containerBook.appendChild(bookDiv);
    })
}


const deleteAllBook = () => {
    containerBook.innerHTML = ''
}

deleteAll.addEventListener('click', deleteAllBook)

// Adding event listener to the 'Add Book' button
addBook.addEventListener('click', addBookToLibrary);
