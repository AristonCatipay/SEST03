const lettersModule = require("./letters");

// Note: All variables and functions inside the letters module is private by default.
// console.log("Letters:", letters); // ReferenceError: letters is not defined
// displayLetters(); // ReferenceError: displayLetters is not defined

// N: If you export the letters array it will be the value of the lettersModule variable.
// console.log(lettersModule); // [ 'A', 'B', 'C' ]

console.log(lettersModule);
console.log("Letters:", lettersModule.letters);
lettersModule.displayLetters();
