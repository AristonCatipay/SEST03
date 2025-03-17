// Procedural VS OOP

// Procedural Programming
// variables(data) and functions are seperate entities.
let make = "Toyota";
let model = "Camry";

function startCar(make, model) {
  console.log(`${make} ${model} started.`);
}
console.log("== Procedural ==");
startCar(make, model);

// Object Oriented Programming
// group related information and functionalities into a single unit.

const car = {
  make: "Toyota",
  model: "Camry",
  start() {
    console.log(`${this.make} ${this.model} started.`);
  },
  stop() {
    console.log(`${this.make} ${this.model} stopped.`);
  },
};

console.log("== OOP ==");
car.start();
car.stop();
