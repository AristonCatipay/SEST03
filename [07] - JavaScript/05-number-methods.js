let num1 = 10;
let num2 = 5;
let num3 = 5.5;

// 1. Arithmetic Operators
console.log(`Addition(+): ${num1 + num2}`);
console.log(`Subraction(-): ${num1 - num2}`);
console.log(`Multiplication(*): ${num1 * num2}`);
console.log(`Division(/): ${num1 / num2}`);
console.log(`Division(/): ${num1 / num3}`);
console.log(`Remainder(%): ${num1 % num3}`);

// Even or Odd
console.log(`Even: ${num1 % 2}`);
console.log(`Odd: ${num2 % 2}`);

console.log(`Exponent(**): ${num1 ** num2}`);

// Increment and Decrement
console.log("Num 1:", num1);
num1++;
console.log("Num 1(Increment):", num1);
num1--;
console.log("Num 1(Decrement):", num1);

// Order of Operations
// PEMDAS / BODMAS
// Parenthesis, Exponent, MDAS (Left to Right)
// Bracket, Order, DMAS (Left to Right)
let answer = 3 + (4 * (5 - 2) ** 2) / 2;
// 3 + (4 * 3 ** 2) / 2;
// 3 + (4 * 9) / 2;
// 3 + 36 / 2;
// 3 + 18;
// 21;
console.log("Answer:", answer);

// 2. Assignment Expressions
// Single Sign (=)
let num4 = 10;
let num5 = 5;

// num4 = num4 + num5;
// Addition Assignment (+=)
// Computation: 10 + 5 = 15
num4 += num5;
console.log("The new value of num4:", num4);

// Subtraction Assignment (-=)
// Computation: 15 - 5 = 10
num4 -= num5;
console.log("The new value of num4:", num4);

// Multiplication Assignment (*=)
// Computation: 10 * 5 = 50
num4 *= num5;
console.log("The new value of num4:", num4);

// Division Assignment (/=)
// Computation: 50 / 5 = 10
num4 /= num5;
console.log("The new value of num4:", num4);

// Exponent Assignment (**=)
// Computation: 10 ** 5 = 100000
num4 **= num5;
console.log("The new value of num4:", num4);

// Remainder Assignment (%=)
// Computation: 100000 % 5 =
num6 = 100024;
console.log(num6 / num5);
num6 %= num5;
console.log("The new value of num4:", num6);

// 3. Number Methods
console.log("Data Type:", typeof num5);
// .toString(): convert the object to a string
const num5String = num5.toString();
console.log(`Num 5: ${num5String} ${typeof num5String}`);

// .toFixed(): how many decimal points included
let num7 = 3.14159265359;
const fixedDecimalPoint = num7.toFixed(4);
console.log(fixedDecimalPoint);
console.log("Data Type:", typeof fixedDecimalPoint);
