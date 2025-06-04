//initialiser for the Library array
let myLibrary = [];

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
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet")
const Holes = new Book("Holes", "Louis Sachar", "233 pages", "read");

//function to push a new book array into the library array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

//example arrays being added to the library
addBookToLibrary(theHobbit);
addBookToLibrary(Holes);

//variables being declared
const bookName = document.getElementById("book-name");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const id = document.getElementById("id");

//function to append the data of the book to the 'table'
function addData(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            let newName = document.createElement('div');
            newName.innerHTML = `${arr[i]}`;
            bookName.appendChild(newName);
            console.log(arr[i])
        } else if (i === 1) {
            let newAuthor = document.createElement('div');
            newAuthor.innerHTML = `${arr[i]}`;
            author.appendChild(newAuthor);
            console.log(arr[i])
        } else if (i === 2) {
            let newPages = document.createElement('div');
            newPages.innerHTML = `${arr[i]}`;
            pages.appendChild(newPages);
            console.log(arr[i])
        } else if (i === 3) {
            let newRead = document.createElement('div');
            newRead.innerHTML = `${arr[i]}`;
            read.appendChild(newRead);
            console.log(arr[i])
        } else if (i === 4) {
            let newId = document.createElement('div');
            newId.innerHTML = `${arr[i]}`;
            id.appendChild(newId);
            console.log(arr[i])
        }
            
    }
    
}

//example book mapped out onto the table
addData(theHobbit.info());
addData(Holes.info());

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

//form submission

let username;

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    console.log(username);
}