// Math: object that contains methods and properties that is related to math.
console.log(Math.PI);

let num1 = 10;
let num2 = 5;
let num3 = 5.5;
let num4 = 5.3;

console.log(`Division: ${num1 / num3}`);
console.log(`Remainder: ${num1 % num3}`);

// .floor(): round down the floating-point number to the nearest integer.
console.log(`Floor: ${Math.floor(num1 / num3)}`);

// .ceil(): round up the floating-point number to the nearest integer.
console.log(`Round Up: ${Math.ceil(num3)}`);

// .round(): rounds off a floating-point number to the nearest integer.
console.log(`Round: ${Math.round(num4)}`);

// .trunc(): remove the decimal part of a floating-point number.
let pi = Math.PI;
console.log(Math.trunc(pi));
