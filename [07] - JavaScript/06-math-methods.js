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

// .pow(): raise a number to the power of another number.
const powResult = Math.pow(2, 3);
console.log("Power:", powResult);

// .sqrt(): return the square root of a given number.
console.log("Square Root:", Math.sqrt(64));

// .abs(): returns the absolute value of a number.
const num5 = -30;
console.log("Absolute:", Math.abs(num5));

// .max(): return the largest number
console.log("Max:", Math.max(num1, num2, num3, num4, num5));

// .min(): return the smallest number
console.log("Min:", Math.min(num1, num2, num3, num4, num5));

// .random(): generate a floating-point number between 0 and 1(excluded)
console.log("Random:", Math.random());
