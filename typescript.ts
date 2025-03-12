//Pre-class exercises
//Exercise 1: Creating and Using Interfaces
interface Book {
  title: string;
  author: string;
  year: number;
}

let book1: Book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
};

function logBookDetails(book: Book): void {
  console.log(`${book.title} by ${book.author} was published in ${book.year}!`);
}

logBookDetails(book1);
//Exercise 2: Working with Typed Functions
//Exercise 3: Using Arrays with TypeScript
//Exercise 4: Understanding Union Types
//Exercise 5: Exploring Generics
