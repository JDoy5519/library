const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.name + " by " + this.author + ", " + this.pages + ", " + this.read
    }
}

function addBookToLibrary(params) {
    
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet");

console.log(theHobbit.info())