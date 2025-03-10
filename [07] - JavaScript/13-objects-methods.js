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
