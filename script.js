//constructer for library
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        let newLibrary = this.books.push(book)
        return newLibrary;
    }

    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index > -1) {
            this.books.splice(index, 1);
        }
    };
}

const myLibrary = new Library();

//prevent default behaviour of submit button
const form = document.getElementById("myForm");
const submit = document.getElementById("mySubmit");


//constructor to create an array from some arguments
class Book{
    constructor(name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    }


    cycleReadStatus() {
        const statuses = [
        "I want to read this one!",
        "I am reading this one!",
        "I have read this one!"
        ];
        const currentIndex = statuses.indexOf(this.read);
        const nextIndex = (currentIndex + 1) % statuses.length;
        this.read = statuses[nextIndex];
    }

    removeDiv() {
        let removeId = this.id;
        let elementToRemove = document.getElementById(removeId);
        if (elementToRemove) elementToRemove.remove();
    }
    }


//example arrrays
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "I want to read this one!")
const Holes = new Book("Holes", "Louis Sachar", "233", "I am reading this one!");

console.log(theHobbit.id);

//function to push a new book array into the library array
function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(book.id);
}

//initialise modal

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener ('click', () => {
    modal_container.classList.add('show');
}
);

close.addEventListener ('click', () => {
    modal_container.classList.remove('show');
}
);


form.addEventListener("submit", (e) => {
    e.preventDefault();
})

//function to select correct radio option

function declareReadValue() {
            let ele = document.getElementsByName('read-status');
            for (j = 0; j < ele.length; j++) {
                if (ele[j].checked)
                    return titleRead = ele[j].value;
            }
        }


//function for submit button
function submitUserInput() {
    let title = document.getElementById("book-name-input").value;
    console.log(title);
    let titleAuthor = document.getElementById("author-input").value;
    console.log(titleAuthor);
    let titlePages = document.getElementById("pages-input").value;
    console.log(titlePages);
    let titleRead = declareReadValue();
    console.log(titleRead);
    let newBook = new Book(title,titleAuthor,titlePages,titleRead);
    console.log(newBook);
    myLibrary.addBook(newBook);
    createCard(newBook);
    console.log(myLibrary);
}

//THIS IS FINE

//variables for function to create card
const futureReads = document.getElementById("future-reads");
const currentlyReading = document.getElementById("currently-reading");
const readingHistory = document.getElementById("reading-history");
const removeThis = document.getElementsByClassName('remove');

function createCard(book) {
const newDiv = document.createElement('div');
const removeButton = document.createElement('button');
    if (book.read === "I want to read this one!") {
        newDiv.innerHTML += `<div>Book name: ${book.name}</div>
        <div>Author: ${book.author}</div>
        <div>Pages: ${book.pages}</div>
        <div>ID: ${book.id}</div>
        <div>${book.read}</div>`;
        newDiv.setAttribute('id', book.id);
        futureReads.appendChild(newDiv);
        removeButton.innerHTML += 'Remove this book!'
        removeButton.setAttribute('class',"remove");
        removeButton.onclick = function () {
            book.removeDiv();
            myLibrary.removeBook(book);
            console.log(myLibrary)
        };
        newDiv.appendChild(removeButton);
        const statusButton = document.createElement('button');
        statusButton.innerHTML = 'Change Read Status';
        statusButton.onclick = function () {
            book.cycleReadStatus();       
            book.removeDiv();             
            createCard(book);            
                };
        newDiv.appendChild(statusButton);
    } else if (book.read === "I am reading this one!") {
        newDiv.innerHTML += `<div>Book name: ${book.name}</div>
        <div>Author: ${book.author}</div>
        <div>Pages: ${book.pages}</div>
        <div>ID: ${book.id}</div>
        <div>${book.read}</div>`;
        newDiv.setAttribute('id', book.id);
        currentlyReading.appendChild(newDiv);
        removeButton.innerHTML += 'Remove this book!'
        removeButton.setAttribute('class',"remove");
        removeButton.onclick = function () {
            book.removeDiv();
            myLibrary.removeBook(book);
            console.log(myLibrary)
        };
        newDiv.appendChild(removeButton);
        const statusButton = document.createElement('button');
        statusButton.innerHTML = 'Change Read Status';
        statusButton.onclick = function () {
            book.cycleReadStatus();       
            book.removeDiv();             
            createCard(book);            
                };
        newDiv.appendChild(statusButton);
    } else if (book.read === "I have read this one!") {
        newDiv.innerHTML += `<div>Book name: ${book.name}</div>
        <div>Author: ${book.author}</div>
        <div>Pages: ${book.pages}</div>
        <div>ID: ${book.id}</div>
        <div>${book.read}</div>`;
        newDiv.setAttribute('id', book.id);
        readingHistory.appendChild(newDiv);
        removeButton.innerHTML += 'Remove this book!'
        removeButton.setAttribute('class',"remove");
        removeButton.onclick = function () {
            book.removeDiv();
            myLibrary.removeBook(book);
            console.log(myLibrary)
        };
        newDiv.appendChild(removeButton);
        const statusButton = document.createElement('button');
        statusButton.innerHTML = 'Change Read Status';
        statusButton.onclick = function () {
            book.cycleReadStatus();        
            book.removeDiv();             
            createCard(book);            
                };
        newDiv.appendChild(statusButton);
    }
};




console.log(myLibrary);

//example arrays being added to the library
myLibrary.addBook(theHobbit);
myLibrary.addBook(Holes);

createCard(theHobbit);
createCard(Holes);
