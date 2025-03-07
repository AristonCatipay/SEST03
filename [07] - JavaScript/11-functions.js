// Functions: block of code that performs a specific task.
// Parameters: placeholders
// Arguments: values passed to a function's parameters

// Hoisting: moving functions to the top of the file.
// Calling a function
let answer = addTwoNumbers(10, 20);
console.log("Answer:", answer);

// 1. Function definition with parameters
function addTwoNumbers(num1, num2) {
  return num1 + num2;
  console.log("Unreachable code.");
}

// 2. Functions with default arguments:
function power(base, exponent = 2) {
  return base ** exponent;
}

console.log("Power:", power(2, 3));
console.log("Power:", power(2));

// 3. Rest Parameter: you can pass multiple arguments
function total(...numbers) {
  let total = 0;

  let i = 0;
  while (i < numbers.length) {
    total += numbers[i];
    i++;
  }

  return total;
}

console.log("Total:", total(10, 20, 30, 40, 50));

// 4. Function Expression
// variable = function(){}
// Anonymous function expression: without a name.
// Named function expression: with a name.

// Note: Hoisting is not supported in functions expressions.
// console.log("Difference:", differenceTwoNumbers(20, 25));

const differenceTwoNumbers = function (num1, num2) {
  return num1 - num2;
};

console.log("Difference:", differenceTwoNumbers(10, 5));

// 5. Arrow Functions
// const introduce = (firstName, lastName) => {
//   console.log(`I am ${firstName} ${lastName}`);
// };

// introduce("Kristine", "Padua");

// Note: If you have a single parameter: remove the pair of parenthesis.
// Note: If you have a single statement: remove the pair of curly brackets.

// const introduce = (name) => {
//   console.log(`I am ${name}`);
// };

const introduce = (name) => console.log(`I am ${name}`);

introduce("Kristine Padua");
