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
function calculateArea(width: number, height: number): number {
  return width * height;
}
let area = calculateArea(5, 10);
console.log(area);
//Exercise 3: Using Arrays with TypeScript
type Movie = { title: string; year: number };
let favoriteMovies: Movie[] = [
  { title: "Inception", year: 2010 },
  { title: "The Matrix", year: 1999 },
];
function addMovie(newMovie: Movie): void {
  favoriteMovies.push(newMovie);
}
addMovie({ title: "Interstellar", year: 2014 });
favoriteMovies.forEach((movie) => {
  console.log(`${movie.title} (${movie.year})`);
});
//Exercise 4: Understanding Union Types
//Exercise 5: Exploring Generics
