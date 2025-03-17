/* 
Polymorphism: Many Forms
- allows objects of different classes 
  to respond to the same method call in different ways.
*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Method Overriding: allows you to redefine the method inherited from the parent.
class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} Woof! Woof!`);
  }
}

class Cat extends Animal {
  makeSound() {
    console.log(`${this.name} Meow!`);
  }
}

const animal = new Animal("Generic Animal");
animal.makeSound();
const dog = new Dog("Browny");
dog.makeSound();
const cat = new Cat("Luna");
cat.makeSound();
