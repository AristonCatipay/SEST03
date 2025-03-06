// Control Flow Structures

// 1. Conditional Statements
// Allow us to execute a block of code if a condition is met.
// {} - Code Block
// () - Condition Block

// If the age is greater than or equal to 18.
// let age = 17;

// if (age >= 18) {
//   console.log("You are eligable to vote.");
// } else {
//   console.log("You are NOT eligable to vote.");
// }

// Ternary Operator
// condition ? true : false
let age = 17;
let message =
  age >= 18 ? "You are eligable to vote." : "You are NOT eligable to vote.";
console.log(message);

// if, else if, else conditional statement
let temperature = 30;

if (temperature < 0) {
  console.log("It's freezing! Wear a jacket.");
} else if (temperature >= 0 && temperature < 20) {
  // Range: 0 - 19
  console.log("It's cool outside.");
} else if (temperature >= 20 && temperature < 30) {
  // Range: 20 - 29
  console.log("It's warm outside.");
} else {
  console.log("It's hot outside.");
}

//  Switch-case statement
let day = "Thursday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's the end of the week.");
    break;
  default:
    console.log("It's a normal day.");
}
