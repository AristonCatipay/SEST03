// Arrays: collection of values
// Element: values inside the array

let fruits = ["Banana", "Apple", "Cherry", "Strawberry"];
console.log("Fruits:", fruits);

console.log("Length:", fruits.length);
console.log("First Fruit:", fruits[0]);

// .slice(start, end(excluded)): access a portion of the array.
const slicedFruits = fruits.slice(1, 3);
console.log("Sliced Fruits:", slicedFruits);
console.log("Original Fruits:", fruits);

// Update element
fruits[1] = "Avocado";
console.log("Fruits:", fruits);

// Adding Elements
// .push(element/s): add an element at the end
fruits.push("Mango", "Dewberries");
console.log("Fruits:", fruits);

// .unshift(element/s): add an element at the start
fruits.unshift("Pineapple", "Grapes");
console.log("Fruits:", fruits);

// Deleting Elements
// .pop(): delete an element at the end
fruits.pop();
console.log("Fruits:", fruits);

// .shift(): delete an element at the start
fruits.shift();
console.log("Fruits:", fruits);

// .splice(): add or delete element/s at a specified index
// 1st argument: start
// 2nd argument: delete count
// 3rd argument: element/s you want to add
fruits.splice(2, 2, "Melon");
console.log("Fruits:", fruits);

// Search elements
// .includes(element, fromIndex): check if an element exist.
console.log("Is Banana included:", fruits.includes("Banana"));

// .indexOf(element): return the index of an element or -1
let index = fruits.indexOf("Banana");
console.log("Index of Banana:", index);

// Duplicate elements
fruits.unshift("Avocado");
fruits.push("Avocado");
console.log("Fruits:", fruits);

let indexOfAvocado = fruits.indexOf("Avocado");
console.log("Index of Avocado:", indexOfAvocado);

let lastIndexOfAvocado = fruits.lastIndexOf("Avocado");
console.log("Index of Avocado:", lastIndexOfAvocado);

// Sorting Elements
// .reverse(): sort the elements in reverse order
fruits.reverse();
console.log("Fruits:", fruits);

// .sort(): sort in alphabetical and numerical
fruits.sort();
console.log("Fruits:", fruits);

// sort in alphabetical (ascending order) then reverse it (descending order)
fruits.sort().reverse();
console.log("Fruits:", fruits);

let odds = [1, 3, 5, 7, 9];
let evens = [2, 4, 6, 8, 10];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Evens:", evens);

// .forEach(): apply a function to each element
evens.forEach((number) => console.log("Number:", number));

// .map(): create a new array by applying a function to each element
let squaredEvens = evens.map((number) => number * number);
console.log("Squared Even Numbers:", squaredEvens);

// .filter(): create a new array with elements that passed the test condition
let evenNumbers = numbers.filter((number) => number % 2 == 0);
console.log("Even:", evenNumbers);

let oddNumbers = numbers.filter((number) => number % 2 == 1);
console.log("Odd:", oddNumbers);

// .reduce(): combine elements into a single value
// 1. accumulator
// 2. currentElement
console.log(numbers);
let total = numbers.reduce((total, number) => total + number, 0);
console.log("Total:", total);
// -- 1st Iteration --
// total = 0
// number = 1
// 0 + 1 = 1
// new total = 1
// -- 2nd Iteration
// total = 1
// number = 2
// 1 + 2 = 3
// new total = 3
// Continue ...

// Task: Get the first element that is greater than 5.
// .find(): return the first element that pass the test condition.
console.log(
  "First number greater than 5:",
  numbers.find((number) => number > 5)
);

// .findIndex(): return the index of the first element that pass the test condition.
console.log(
  "Index of the first number greater than 5:",
  numbers.findIndex((number) => number > 5)
);

// Spread Operator
let oddAndEven = [...odds, ...evens];
console.log("Odds and Evens:", oddAndEven);

// Destructuring an Array
// let first = numbers[0];
// let second = numbers[1];
console.log(numbers);

let [first, second, third, ...restOfNumbers] = numbers;
console.log("First Number:", first);
console.log("Second Number:", second);
console.log("Third Number:", third);
console.log("Rest of Numbers:", restOfNumbers);

// for of - iterate over each element of the array.
console.log("Fruits:", fruits);
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}
