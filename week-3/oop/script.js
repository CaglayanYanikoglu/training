// //Object, property, and method
/* const book = {
   title: 'The Raven',
   author: 'Edgar Allan Poe',
   year: '1996',
};

console.log(book);
console.log(book.title);
console.log(book['title']);
 */
////<------------------------------------------------->

// //Object constructor
/* function Book(title, author, year) {
   this.title = title;
   this.author = author;
   this.year = year;
}

const book1 = new Book('The Raven', 'Edgar Allan Poe', '1996');
const book2 = new Book('One Hundred Years of Solitude', 'Gabriel García Márquez', '1967');

console.log(book1.year)
console.log(book2.title); */

/* console.log(book2)
console.log(book1 && book2 instanceof Book) */

////<------------------------------------------------->

//Object.create()
/* const Book = {
   summary: function () {
      console.log(`${this.title} is written by ${this.author}.`);
   },
};
const testObj = Book;
testObj.name = 'caglayan';
console.log(testObj);
console.log({Book});
const book1 = Object.create(Book);
book1.author = 'Edgar Allan Poe';
book1.title = 'The Raven';
book1.summary();
const book2 = Object.create(Book);
book2.summary(); */

////<------------------------------------------------->

// //Class Prototype-Based Model

/* let Book = function (name, age) {
   this.name = name;
   this.age = age;
};
let newBook = function (name, age) {
   // this.name = name;
   // this.age = age;
   Book.call(this, name, age);
};
newBook.prototype = Object.create(Book.prototype); // newBook extends Book
const book1 = new newBook('The Raven', 16);
console.log(book1); */

// //Class ES6 Syntax(Behind the scenes, it still uses a prototype-based model)

/* class Book {
   // first call function
   constructor(name) {
      console.log('Book constructor');
      this.name = name;
   }
}
// inheritance
class newBook extends Book {
   constructor(name) {
      console.log('newbook constructor');
      super(name);
   }
}
const book1 = new newBook('The Raven');
console.log(book1); */

// //take a look

/* class Book {
   constructor(title, author) {
      this.title = title;
      this.author = author;
   }
   summary() {
      console.log(`${this.title} written by ${this.author}`);
   }
}
const book1 = new Book('The Raven', 'Edgar Allan Poe');

console.log(book1)
book1.summary();
console.log(typeof Book);
console.log(typeof book1);
const book2 = new Book('Olasılıksız', 'Adam Fawer');
book2.summary(); */


////<------------------------------------------------->

// //Encapsulation(Encapsulation means hiding information or data)

/* const Book = function(t, a) {
    let title = t;
    let author = a;

    return {
       summary : function() {
         console.log(`${title} written by ${author}.`);
       }
    }
 }
const book1 = new Book('The Raven', 'Edgar Allan Poe');


//The title and the author are encapsulated inside Book. The summary is visible to the caller.
console.log(book1);
book1.summary();
console.log(book1.title); */

////<------------------------------------------------->

// //Abstraction(Hiding the implementation details and only showing the essential features to the caller)
/* Helps the user to avoid writing low level code.
Avoids code duplication and increases reusability.
Can change internal implementation of class independently without affecting the user.
Helps to increase security of an application or program as only important details are provided to the user. */
/* class ImplementAbstraction {
   // method to set values of internal members
   set(x, y) {
     this.a = x;
     this.b = y;
   }
 
   display() {
     console.log('a = ' + this.a);
     console.log('b = ' + this.b);
   }

   getA () {
      return this.a;
   }
 }
 
 const obj = new ImplementAbstraction();
 obj.set(10, 20);
 console.log(obj.a);
 obj.display(); */


////<------------------------------------------------->

// //Polymorphism(The ability to call the same method on different objects and have each of them respond in their own way)

/* class CoreBook {
   constructor(title, author) {
      this.title = title;
      this.author = author;
   }

   coreSummary() {
      console.log(`${this.title} written by ${this.author}.`);
   }
}

class Book extends CoreBook {
   constructor(title, author, year) {
      super(title, author); 
      this.year = year;
   }

   bookSummary() {
      console.log(`${this.title} written by ${this.author} at ${this.year}.`);
   }
}

class DetailedBook extends Book {
    constructor(title, author, year, genre) {
       super(title, author, year); 
       this.genre = genre;
    }
 
    bookSummary() {
       console.log(`${this.title} written by ${this.author} at ${this.year} and books genre is ${this.genre} `);
    }
 }

 // CoreBook > Book > DetailedBook
const book1 = new Book('The Raven', 'Edgar Allan Poe', '1996', 'novel');
const book2 = new DetailedBook('One Hundred Years of Solitude', 'Gabriel García Márquez', '1996', 'Novel');
console.log(book1);
console.log(book2);
book1.bookSummary();
book2.bookSummary();
 */
////<------------------------------------------------->


/* function printIt(number1, number2, number3) {
   console.log(number1);
   console.log(number2);
   console.log(number3);
} */