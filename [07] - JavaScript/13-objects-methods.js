const person = {
  // Properties: information
  // key:value
  firstName: "Bruno",
  lastName: "Mars",
  age: 30,
  isMarried: true,
  talents: ["Singing", "Songwriting", "Dancing"],

  // Methods: functionalities
  sing: function () {
    console.log("Bruno is singing.");
  },

  dance() {
    console.log("Bruno is dancing.");
  },

  // method that can access properties of the current object.
  introduce() {
    console.log(`I am ${this.firstName} ${this.lastName}.`);
  },
};

console.log("Person:", person);

// Using dot notation: Access the properties and methods
console.log("Firstname:", person.firstName);
console.log("Talents:", person.talents);

// Using the square brackets.
console.log("Lastname:", person["lastName"]);

// Update the value for a key
person.age = 31;
console.log("Age:", person.age);

// Access the method
person.sing();

// Method created using enhanced object literal
person.dance();

// Method that use current objects properties.
person.introduce();

// Adding a new property (key:value pair)
person.gender = "Male";
console.log("Gender:", person.gender);

// Adding a new method
person.greet = function () {
  console.log("Hello, welcome to world of objects.");
};

person.greet();

// Nested Object
const address = {
  street: "123 Example Street",
  city: "Example City",
  country: "Example Country",
};

person.address = address;
console.log("Person:", person);

// Accessing a property that is inside of the nested object.
console.log("City:", person.address.city);

// Object Destructuring

/*
Traditional Method:
const firstName = person.firstName;
const lastName = person.lastName;
console.log(firstName);
console.log(lastName);
*/

const { firstName, talents, age } = person;
console.log("First name:", firstName);
console.log("Talents:", talents);
console.log("Age:", age);

// Spread Operator
const grades = {
  math: 80,
  science: 88,
  english: 85,
  pe: 99,
};

const gradesWithEC = {
  ...grades,
  extraCurricular: 90,
};

console.log("Grades with Extra Curricular:", gradesWithEC);

// Object.keys(): return the keys of an object in an array.
const keys = Object.keys(person);
console.log("Keys:", keys);

// Object.values(): return the values of an object in an array.
const values = Object.values(person);
console.log("Values:", values);

// Object.entries(): return the key and value pair of an object.
// Return: Nested Array, first element is the key, second element is the value.
const keyAndValuePair = Object.entries(person);
console.log("Key-value pair:", keyAndValuePair);

// for in loop: iterate through the keys of an object.
for (let key in gradesWithEC) {
  console.log(`Key: ${key}, Value: ${gradesWithEC[key]}`);
}

// JavaScript Object Notation(JSON): exchange data.
console.log("Person:", person);
console.log("Data Type:", typeof person);
let personObjectToString = JSON.stringify(person);
console.log("Person Object To String:", personObjectToString);
console.log("Data Type:", typeof personObjectToString);

let personStringToObject = JSON.parse(personObjectToString);
console.log("Person Object:", personStringToObject);
console.log("Data Type:", typeof personStringToObject);
