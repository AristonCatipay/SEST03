// 1. Implicit type coercion: automatically convert the data type.
// - Equal to (==) and Not Equal to (!=)

// 2. Explicit type coercion:
// Number(): convert a string to a number.
const string = "30";
console.log("String:", string);
console.log("Data Type:", typeof string);

const stringNumber = Number(string);
console.log("Converted:", stringNumber);
console.log("Data Type:", typeof stringNumber);

// String(): convert to a string
const numberToString = String(stringNumber);
console.log("Converted:", numberToString);
console.log("Data Type:", typeof numberToString);

// Boolean(): convert to boolean (true, false)
// Truthy and Falsy Values
// Falsy: 0, null, undefined, NaN, ""
// Truthy: everything else
const truthy = 30;
const falsy = "";

const falsyToBoolean = Boolean(falsy);
console.log("Converted:", falsyToBoolean);

const truthyToBoolean = Boolean(truthy);
console.log("Converted:", truthyToBoolean);

// Global Methods
// parseInt(): parse a string and return an integer
const stringWithNumber = "1234";
const address = "321 Main Ave. Example Street";

const stringParseToNumber = parseInt(stringWithNumber);
console.log("Number:", stringParseToNumber);
console.log("Data Type:", typeof stringParseToNumber);

const addressParseToNumber = parseInt(address);
console.log("Number:", addressParseToNumber);
console.log("Data Type:", typeof addressParseToNumber);

const price = "99.99 per dozen";
const priceToNumber = parseInt(price);
console.log("Parse Int:", priceToNumber);

const priceToFloat = parseFloat(price);
console.log("Parse Float:", priceToFloat);
