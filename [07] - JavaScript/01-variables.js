console.log("Hello World");
// This is a single-line comment.

/*
  This is a
  multi-line
  comment.
*/

// Variables
/*
  Three ways to create a variable:
  var - mutable/changeable - global scope
  let - mutable/changeable - block scope
  const - unmutable/unchangeable - block scope

  Variable Naming Convention: Camel Case
*/
var firstName = "John";
console.log("Firstname:", firstName);
firstName = "Jane";
console.log("Firstname:", firstName);

let lastName = "Doe";
console.log("Lastname:", lastName);
lastName = "Smith";
console.log("Lastname:", lastName);

const birthday = "03-04-2000";
console.log("Birthday:", birthday);
// birthday = "03-05-2000"; TypeError: Assignment to constant variable.

// Global VS. Block Scope
// Code Blocks - {}
{
  var email = "janesmith@example.com";
  let username = "janesmith30";
  console.log("Email:", email);
  console.log("Username:", username);
}
console.log("Email:", email);

// console.log("Username:", username); Will not work!
// Uncaught ReferenceError: username is not defined
