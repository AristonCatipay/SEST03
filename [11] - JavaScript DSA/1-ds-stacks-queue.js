// Stack: (LIFO) add and remove elements at the end(top) of the array.
let plateStack = [];

plateStack.push("Plate 1");
plateStack.push("Plate 2");
plateStack.push("Plate 3");

console.log("Plate Stack:", plateStack);

plateStack.pop();
plateStack.pop();
console.log("Plate Stack:", plateStack);

// Queues: (FIFO) add an element at the end of the array, remove element at the start of the array.
let queue = [];

queue.push("Person 1");
queue.push("Person 2");
queue.push("Person 3");

console.log("Queue:", queue);

// .shift(): delete an element at the start of the array.
queue.shift();
console.log("Queue:", queue);
