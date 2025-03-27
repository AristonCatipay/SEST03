// Global Object: we can access this object in any files.

// var: mutable/changeable - global scope
var varContainer = "Global Scope";
var varFunction = () => {
  console.log("Function expression using var keyword.");
};

// window object: global object in a browser.
// console.log(
//   "== global scope variables and functions inside of the window object =="
// );
// console.log("Var Variable:", window.varContainer);
// window.varFunction();

// console.log("== Automatic Prefix ==");
// console.log("Var Variable:", varContainer);
// varFunction();

// let letContainer = "Block Scope";
// const constContainer = "Block Scope";
// console.log("Let Variable:", window.letContainer);
// console.log("Const Variable:", window.constContainer);

// console.log("== PROBLEM ==");
// var varContainer = "Updated Global Scope";
// var varFunction = () => {
//   console.log("Update function expression using var keyword.");
// };

// console.log("Var:", varContainer);
// varFunction();

// Note: window object is not available in node.
// ReferenceError: window is not defined

// global: global object in node.
// console.log("Var:", global.varContainer); // Var: undefined
// global.varFunction(); // TypeError: global.varFunction is not a function
