// Callback:
// - is a function that is passed as an argument to another function.
// - callbacks are used to handle asynchronous operations.

// Callback Hell

const taskOne = (callback) => {
  setTimeout(() => {
    console.log("Task 1 complete.");
    callback();
  }, 3000);
};

const taskTwo = (callback) => {
  setTimeout(() => {
    console.log("Task 2 complete.");
    callback();
  }, 2000);
};

const taskThree = (callback) => {
  setTimeout(() => {
    console.log("Task 3 complete.");
    callback();
  }, 1000);
};

// Nested Callback: Callback Hell
taskOne(() => {
  taskTwo(() => {
    taskThree(() => {
      console.log("All tasks complete.");
    });
  });
});
