/*
require()
1. Local Modules: files within the project directory.
2. Built-in Modules: core modules that come bundled with Node.js.
3. Third party packages: modules that you install from external sources.
*/

// fs built-in module: provides a set of functions for interacting with the file system.
const fs = require("node:fs");

// fs.readFile(filename, encoding, callbackFunction): asynchronously read the contents of a file.
fs.readFile("example.txt", "utf8", (error, content) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log("== Reading a File ==");
  console.log("File Content:", content);
});

// fs.writeFile(filename, content, encoding, callbackFunction): asynchronously write data to a file.
const content = "Hello, welcome to fs module in Node.js!";
fs.writeFile("output.txt", content, "utf8", (error) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log("== Writing a File ==");
  console.log("Data written to the file successfully!");
});

// fs.existsSync: synchronously check if a file/directory exists.
// Return: true or false
const filePath = "example.txt";
if (fs.existsSync(filePath)) {
  console.log("File exists!");
} else {
  console.log("File does not exists!");
}

// fs.readdir(directoryPath, callbackFunction): asynchronously retrieve the list of files inside a directory.
// Return: array of files and folders.
fs.readdir(".", (error, contents) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log("== List all files and folders ==");
  console.log("Files inside the directory:", contents);
});

// fs.mkdir(directoryPath, callbackFunction): asynchronously create a directory
// Return an error if the folder exists.
fs.mkdir("new_directory", (error) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log("== Create a Directory ==");
  console.log("Directory created successfully!");
});

// fs.rmdir(): asynchronously remove a directory(empty)
fs.rmdir("new_directory", (error) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log("== Delete a Folder");
  console.log("Directory deleted successfully!");
});
