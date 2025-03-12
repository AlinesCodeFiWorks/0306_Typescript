//Pre-class review section
//Exercise 1 review
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayDetails() {
    return `Product: ${this.name}, Price: $${this.price}`;
  }
}

class Electronics extends Product {
  constructor(name, price, warranty) {
    super(name, price);
    this.warranty = warranty;
  }

  displayDetails() {
    return `${super.displayDetails()}, Warranty: ${this.warranty} years`;
  }
}

const product = new Product("Notebook", 5);
console.log(product.displayDetails()); // Product: Notebook, Price: $5

const laptop = new Electronics("Laptop", 1200, 2);
console.log(laptop.displayDetails()); // Product: Laptop, Price: $1200, Warranty: 2 years

//Exercise 2 review
// Using Promises
function fetchFirstPostWithPromises() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log("First Post Title (Promises):", data[0].title);
    })
    .catch((error) => console.error("Error:", error));
}

// Using Async/Await
async function fetchFirstPostWithAsyncAwait() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("First Post Title (Async/Await):", data[0].title);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchFirstPostWithPromises();
fetchFirstPostWithAsyncAwait();

//Exercise 3 review
function calculateDiscount(price, discount) {
  return price - price * (discount / 100);
}

// Custom Assertion Function
function assertEqual(actual, expected, message) {
  if (actual === expected) {
    console.log("PASS:", message);
  } else {
    console.error(`FAIL: ${message} | Expected ${expected}, but got ${actual}`);
  }
}

// Test Cases
assertEqual(calculateDiscount(100, 20), 80, "20% discount on $100");
assertEqual(calculateDiscount(50, 10), 45, "10% discount on $50");
assertEqual(calculateDiscount(200, 25), 150, "25% discount on $200");
