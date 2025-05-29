//Skeleton working here

const myLibrary = [];

function Book(name, author, pages, read, id) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    id = self.crypto.randomUUID();
    this.info = function() {
        return [this.name, this.author, this.pages, this.read, id]
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet")
const Holes = new Book("Holes", "Louis Sachar", "233 pages", "read");

function addBookToLibrary(book) {
    myLibrary.push(book);
}

console.log(theHobbit.info());
console.log(Holes.info());
console.log(addBookToLibrary(theHobbit.info()));
console.log(addBookToLibrary(Holes.info()));
console.log(myLibrary);
