//Post-class exercises
//Exercise 1: Building a Simple User Management System
interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [
  User1 { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

function findUserById(ID: number): void {
  users.find((ID)=>ID===users.id);
}

console.log(findUserById(1));

//Exercise 2: Validating Input with Type Guards
//Exercise 3: Exploring Enums
//Exercise 4: Leveraging Type Aliases
//Exercise 5: Type Assertion Practice
//Exercise 6: Working with Optional Properties
