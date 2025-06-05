//initialiser for the Library array
let myLibrary = [];

//prevent default behaviour of submit button
const form = document.getElementById("myForm");
const submit = document.getElementById("mySubmit");


//constructor to create an array from some arguments
function Book(name, author, pages, read) {
    this.name = name; //assigns the name object to the first argument taken for a new Book
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = self.crypto.randomUUID();
    this.info = function() {
        return [this.name, this.author, this.pages, this.read, this.id]
    }
}





//example arrrays
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", 3)
const Holes = new Book("Holes", "Louis Sachar", "233", 1);




//function to push a new book array into the library array
function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(book.id);
}




//example arrays being added to the library
addBookToLibrary(theHobbit);
addBookToLibrary(Holes);


//function to set the prototypes of each function to acess objects
Object.setPrototypeOf(addBookToLibrary, Book);
Object.setPrototypeOf(createCard, Book);
Object.setPrototypeOf(submitUserInput, Book);

//toggle the modal

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

//initialise form variables

let title;
let titleAuthor;
let titlePages;
let titleRead;

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
    addBookToLibrary(newBook);
    createCard(newBook);
    console.log(myLibrary);
}

//onclick function for submit button

//THIS IS FINE

//function to create card
const futureReads = document.getElementById("future-reads");
const currentlyReading = document.getElementById("currently-reading");
const readingHistory = document.getElementById("reading-history");
const newDiv = document.createElement('div');

function createCard(book) {
    if (book.read === "I want to read this one!") {
        newDiv.innerHTML += `<div>Book name: ${book.name}</div>
        <div>Author: ${book.author}</div>
        <div>Pages: ${book.pages}</div>
        <div>ID: ${book.id}</div>
        <div>${book.read}</div>`;
        futureReads.appendChild(newDiv);
    } else if (book.read === "I am reading this one!") {
        newDiv.innerHTML += `<div>Book name: ${book.name}</div>
        <div>Author: ${book.author}</div>
        <div>Pages: ${book.pages}</div>
        <div>ID: ${book.id}</div>
        <div>${book.read}</div>`;
        currentlyReading.appendChild(newDiv);
    } else if (book.read === "I have read this one!") {
        newDiv.innerHTML += `<div>Book name: ${book.name}</div>
        <div>Author: ${book.author}</div>
        <div>Pages: ${book.pages}</div>
        <div>ID: ${book.id}</div>
        <div>${book.read}</div>`;
        readingHistory.appendChild(newDiv);
    }
};


console.log(myLibrary);
