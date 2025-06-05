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

//variables being declared

//future
const futureBookName = document.getElementById("future-book-name");
const futureAuthor = document.getElementById("future-author");
const futurePages = document.getElementById("future-pages");
const futureRead = document.getElementById("future-read");
const futureId = document.getElementById("future-id");

//current
const currentBookName = document.getElementById("current-book-name");
const currentAuthor = document.getElementById("current-author");
const currentPages = document.getElementById("current-pages");
const currentRead = document.getElementById("current-read");
const currentId = document.getElementById("current-id");

//past
const pastBookName = document.getElementById("past-book-name");
const pastAuthor = document.getElementById("past-author");
const pastPages = document.getElementById("past-pages");
const pastRead = document.getElementById("past-read");
const pastId = document.getElementById("past-id");
let array = [];
let readVariable;
let bookClass;
const removeButton = document.createElement('button');

//function to append the data of the book to the 'table'
Object.setPrototypeOf(addData, Book);
Object.setPrototypeOf(addBookToLibrary, Book);
function addData(arr) {
    array = arr.info();
    readVariable = arr.read;
    bookClass = arr.id;
    if (readVariable === 1) {
        for (let i = 0; i < array.length; i++) {
            if (i === 0) {
                let newName = document.createElement('div');
                newName.innerHTML = `${array[i]}`;
                newName.setAttribute = ('class', bookClass);
                console.log(`${array[i]}`)
                futureBookName.appendChild(newName);
            } else if (i === 1) {
                let newAuthor = document.createElement('div');
                newAuthor.innerHTML = `${array[i]}`;
                newAuthor.setAttribute = ('class', bookClass);
                futureAuthor.appendChild(newAuthor);
                console.log(array[i])
            } else if (i === 2) {
                let newPages = document.createElement('div');
                newPages.innerHTML = `${array[i]}`;
                newPages.setAttribute = ('class', bookClass);
                futurePages.appendChild(newPages);
                console.log(array[i])
            } else if (i === 3) {
                let newRead = document.createElement('div');
                newRead.innerHTML = `${array[i]}`;
                newRead.setAttribute = ('class', bookClass);
                futureRead.appendChild(newRead);
                console.log(array[i])
            } else if (i === 4) {
                let newId = document.createElement('div');
                newId.innerHTML = `${array[i]}`;
                removeButton.innerHTML = "Remove";
                removeButton.setAttribute = ('id', bookClass);
                newId.setAttribute = ('class', bookClass);
                futureId.appendChild(newId);
                newId.appendChild(removeButton);
                console.log(array[i])
            }
            
        }
        
    } else if (readVariable === 2) {
        
        for (let i = 0; i < array.length; i++) {
            if (i === 0) {
                let newName = document.createElement('div');
                newName.innerHTML = `${array[i]}`;
                newName.setAttribute = ('class', bookClass);
                console.log(`${array[i]}`)
                currentBookName.appendChild(newName);
            } else if (i === 1) {
                let newAuthor = document.createElement('div');
                newAuthor.innerHTML = `${array[i]}`;
                newAuthor.setAttribute = ('class', bookClass);
                currentAuthor.appendChild(newAuthor);
                console.log(array[i])
            } else if (i === 2) {
                let newPages = document.createElement('div');
                newPages.innerHTML = `${array[i]}`;
                newPages.setAttribute = ('class', bookClass);
                currentPages.appendChild(newPages);
                console.log(array[i])
            } else if (i === 3) {
                let newRead = document.createElement('div');
                newRead.innerHTML = `${array[i]}`;
                newRead.setAttribute = ('class', bookClass);
                currentRead.appendChild(newRead);
                console.log(array[i])
            } else if (i === 4) {
                let newId = document.createElement('div');
                removeButton.innerHTML = "Remove";
                removeButton.setAttribute = ('id', bookClass);
                newId.innerHTML = `${array[i]}`;
                newId.setAttribute = ('class', bookClass);
                currentId.appendChild(newId);
                currentId.appendChild(removeButton);
                console.log(array[i])
            }
            
        }


    } else if (readVariable === 3) {

        for (let i = 0; i < array.length; i++) {
                    if (i === 0) {
                        let newName = document.createElement('div');
                        newName.innerHTML = `${array[i]}`;
                        newName.setAttribute = ('class', bookClass);
                        console.log(`${array[i]}`)
                        pastBookName.appendChild(newName);
                    } else if (i === 1) {
                        let newAuthor = document.createElement('div');
                        newAuthor.innerHTML = `${array[i]}`;
                        newAuthor.setAttribute = ('class', bookClass);
                        pastAuthor.appendChild(newAuthor);
                        console.log(array[i])
                    } else if (i === 2) {
                        let newPages = document.createElement('div');
                        newPages.innerHTML = `${array[i]}`;
                        newPages.setAttribute = ('class', bookClass);
                        pastPages.appendChild(newPages);
                        console.log(array[i])
                    } else if (i === 3) {
                        let newRead = document.createElement('div');
                        newRead.innerHTML = `${array[i]}`;
                        newRead.setAttribute = ('class', bookClass);
                        pastRead.appendChild(newRead);
                        console.log(array[i])
                    } else if (i === 4) {
                        let newId = document.createElement('div');
                        newId.innerHTML = `${array[i]}`;
                        newId.setAttribute = ('class', bookClass);
                        removeButton.innerHTML = "Remove";
                        removeButton.setAttribute = ('id', bookClass);
                        pastId.appendChild(newId);
                        pastId.appendChild(removeButton);
                        console.log(array[i])
                    }
                    
                }
            }

    }    


let addData1 = Object.getPrototypeOf(addData);
console.log(addData1);

//example book mapped out onto the table
addData(theHobbit);
addData(Holes);

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

//prevent default behaviour of submit button
const form = document.getElementById("myForm");
const submit = document.getElementById("mySubmit");

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

//onclick function for submit button

submit.onclick = function () {
    let title = document.getElementById("book-name-input").value;
    console.log(title);
    let titleAuthor = document.getElementById("author-input").value;
    console.log(titleAuthor);
    let titlePages = document.getElementById("pages-input").value;
    console.log(titlePages);
    let titleRead = declareReadValue();
    console.log(titleRead);
    let newBook = new Book(title,titleAuthor,titlePages,titleRead);
    console.log(newBook)
    addData(newBook.info());
}

//function to remove all elements of the book
function removeBookDetails(className) {
    let elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

