// Inheritance:
// allows objects to acquire properties and behaviors from other objects.

// Parent Class
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Child Class
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Browny", "Golden Retriever");
console.log("Name:", dog.name);
console.log("Breed:", dog.breed);
dog.eat();
dog.bark();

const genericAnimal = new Animal("Generic Animal");
console.log("Name:", genericAnimal.name);
genericAnimal.eat();
// console.log("Breed:", genericAnimal.breed);
// genericAnimal.bark(); TypeError: bark is not a function.
