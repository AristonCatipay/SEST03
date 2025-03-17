// Classes
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.make} ${this.model} started.`;
  }
  stop() {
    return `${this.make} ${this.model} stopped.`;
  }
}

const car1 = new Car("Ford", "Mustang");
const car2 = new Car("Dodge", "Charger");
console.log(car1);
console.log(car1.start());
console.log(car1.stop());
console.log(car2);
console.log(car2.start());
console.log(car2.stop());
