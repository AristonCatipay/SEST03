// Promise: Object that manages asychronous operations.
// Syntax: new Promise((resolve, reject) => {asynchronous code})

// States:
// 1. Pending
// 2. Resolve: task completed.
// 3. Reject: task failed.

const taskOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskComplete = true;
      if (taskComplete) {
        resolve("Task 1 complete.");
      } else {
        reject("Task 1 failed.");
      }
    }, 3000);
  });
};

const taskTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskComplete = false;
      if (taskComplete) {
        resolve("Task 2 complete.");
      } else {
        reject("Task 2 failed.");
      }
    }, 2000);
  });
};

const taskThree = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskComplete = true;
      if (taskComplete) {
        resolve("Task 3 complete.");
      } else {
        reject("Task 3 failed.");
      }
    }, 1000);
  });
};

// Method Chaining
taskOne()
  .then((value) => {
    console.log(value);
    return taskTwo();
  })
  .then((value) => {
    console.log(value);
    return taskThree();
  })
  .then((value) => {
    console.log(value);
    console.log("All tasks completed.");
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("This will execute regardless of success or failure.");
  });
