/* 
I couldn't figure out the form thing. every time i looked up the form element
It mentioned something like JQuery or something that seemed more advanced or new

*/
// created function to randomly color each book
function randomColorBG(){
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = `rgb(${x}, ${y}, ${z})`;
  return bgColor;
}

/* Book: tracks all properties in data ✅ */
class Book {
    constructor(author, language, subject, title){
      this.author = author;
      this.language = language;
      this.subject = subject;
      this.title = title;
    }
    Render(){
      // make a rectangle to symbolize a book
      let div = document.querySelector("#bookSection")
      let rectangle = document.createElement("div");
      rectangle.classList.add("bookCard");    
      // created text element to center text in book
      let bookTextEle = document.createElement("div"); 
      bookTextEle.classList.add("bookText")
      rectangle.append(bookTextEle);
      
      // add color to each book's background
      rectangle.style.backgroundColor = randomColorBG();

      // added innertext to book face
      bookTextEle.innerText = 
      `${this.title}
      by ${this.author} 

      ${this.language}

      ${this.subject}
      `
      rectangle.inner
      div.append(rectangle);
    }
}
/*bookshelf should: 1. maintain array of shelf 2. add books to bookshelf ✅*/
class Bookshelf {
    constructor(){
        this.shelf = [];
    }
    // adding book to bookshelf
    Add(bookObj){
      this.shelf.push(bookObj);
    }
}

// create eternal bookshelf (holds all books ever created)
let eternalBookshelf = new Bookshelf();

//loop through bookData
for (let i = 0; i < bookData.length; i++){
  let currEle = bookData[i];
  // create book element that will transform given object into "Book"
  let currBook = new Book(currEle.author, currEle.language, currEle.subject, currEle.title);
  // add book to webpage
  currBook.Render();
  // add book to bookshelf
  eternalBookshelf.Add(currBook); // it worked!!!! ✅
}

// trying to add book to newly created bookshelf
const bookshelf1 = new Bookshelf();
// adding book to same shelf
let book2 = new Book(["Clear, James"], "en", ["self-help", "non-fiction"], "Atomic Habits");
bookshelf1.Add(book2); //✅

book2.Render();