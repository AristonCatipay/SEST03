// const car1 = {
//   make: "Toyota",
//   model: "Camry",
//   start() {
//     console.log(`${this.make} ${this.model} started.`);
//   },
//   stop() {
//     console.log(`${this.make} ${this.model} stopped.`);
//   },
// };

// const car2 = {
//   make: "Ford",
//   model: "Mustang",
//   start() {
//     console.log(`${this.make} ${this.model} started.`);
//   },
//   stop() {
//     console.log(`${this.make} ${this.model} stopped.`);
//   },
// };

// const car3 = {
//   make: "Dodge",
//   model: "Charger",
//   start() {
//     console.log(`${this.make} ${this.model} started.`);
//   },
//   stop() {
//     console.log(`${this.make} ${this.model} stopped.`);
//   },
// };

// car1.start();
// car2.start();
// car3.start();
// car1.stop();
// car2.stop();
// car3.stop();

// Constructor Functions
// Camel: oneTwoThree
// Pascal: OneTwoThree
function Car(make, model) {
  this.make = make;
  this.model = model;
  this.start = function () {
    return `${this.make} ${this.model} started.`;
  };
  this.stop = function () {
    return `${this.make} ${this.model} stopped.`;
  };
}

// Object Instantiation
const car1 = new Car("Ford", "Mustang");
const car2 = new Car("Dodge", "Charger");
console.log(car1);
console.log(car1.start());
console.log(car1.stop());
console.log(car2);
console.log(car2.start());
console.log(car2.stop());
