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
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "I want to read this one!")
const Holes = new Book("Holes", "Louis Sachar", "233", "I am reading this one!");


//function to push a new book array into the library array
function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(book.id);
}





//function to set the prototypes of each function to acess objects
Object.setPrototypeOf(addBookToLibrary, Book);
Object.setPrototypeOf(createCard, Book);
Object.setPrototypeOf(submitUserInput, Book);
Object.setPrototypeOf(removeFromLibrary, Book);

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
            deleteOnClick(this);
            console.log(myLibrary)
        };
        newDiv.appendChild(removeButton);
        const statusButton = document.createElement('button');
        statusButton.innerHTML = 'Change Read Status';
        statusButton.onclick = function () {
            cycleReadStatus(book);       
            removeDiv(this);             
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
            deleteOnClick(this);
            console.log(myLibrary)
        };
        newDiv.appendChild(removeButton);
        const statusButton = document.createElement('button');
        statusButton.innerHTML = 'Change Read Status';
        statusButton.onclick = function () {
            cycleReadStatus(book);       
            removeDiv(this);             
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
            deleteOnClick(this);
            
        };
        newDiv.appendChild(removeButton);
        const statusButton = document.createElement('button');
        statusButton.innerHTML = 'Change Read Status';
        statusButton.onclick = function () {
            cycleReadStatus(book);       
            removeDiv(this);             
            createCard(book);            
                };
        newDiv.appendChild(statusButton);
    }
};

//function to delete div from the DOM
let deleteId;

function getParentId(el) {
    let deleteId = el.parentNode.id;
    return deleteId;
}

function removeDiv(el) {
    let removeId = getParentId(el);
    let elementToRemove = document.getElementById(removeId);
    if (elementToRemove) elementToRemove.remove();
}

//function to delete the object from the library
function removeFromLibrary(arr, value) {
    const filtered = arr.filter(obj => obj.id !== value);
    return myLibrary = filtered;
};

//put all of these together to create one function for the onlick

function deleteOnClick(el) {
    removeDiv(el);
    let parentId = getParentId(el);
    removeFromLibrary(myLibrary, parentId);
}

//function to alter read status

function cycleReadStatus(book) {
    const statuses = [
        "I want to read this one!",
        "I am reading this one!",
        "I have read this one!"
    ];
    const currentIndex = statuses.indexOf(book.read);
    const nextIndex = (currentIndex + 1) % statuses.length;
    book.read = statuses[nextIndex];
}

console.log(myLibrary);

//example arrays being added to the library
addBookToLibrary(theHobbit);
addBookToLibrary(Holes);

createCard(theHobbit);
createCard(Holes);
