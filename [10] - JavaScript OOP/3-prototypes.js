// Prototypes
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

// This will not work
// Car.topSpeed = 60;
// console.log(car1.topSpeed);
// console.log(car2.topSpeed);

// Adding a new property
Car.prototype.topSpeed = 180;
console.log("Top Speed:", car1.topSpeed);
console.log("Top Speed:", car2.topSpeed);

// Adding a new method
Car.prototype.accelerate = function () {
  return `${this.make} ${this.model} accelerated to ${this.topSpeed} kph.`;
};

console.log(car1.start());
console.log(car1.accelerate());
console.log(car2.start());
console.log(car2.accelerate());
