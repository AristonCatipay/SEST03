// Callback:
// - is a function that is passed as an argument to another function.
// - callbacks are used to handle asynchronous operations.

// Parameter: placeholder.
// Arguments: values that will replace the functions parameters.

const getData = (callback) => {
  setTimeout(() => {
    const data = "This is the data.";
    callback(data);
  }, 3000);
};

const processData = (data) => {
  console.log("Processing data..");
  console.log("Processed Data:", data);
};

getData(processData);
