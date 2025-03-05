// String concatenation
let greeting = "Hello";
let name = "Gerome";

console.log(greeting + " " + name + "!");

// Template literals
console.log(`${greeting} ${name}!`);

let course = "Full-Stack Web Development";
console.log("Course:", course);
console.log("Data Type:", typeof course);

// property: information about an object
// methods: function that belongs to a specific object

// .length: return the length of the string
console.log("Length:", course.length);

// .toLowerCase(): convert all characters to lowercase
console.log("Lowercase:", course.toLowerCase());

// .toUpperCase(): convert all characters to uppercase
console.log("Uppercase:", course.toUpperCase());

console.log(course);
// .slice(start, end(excluded)): access a portion of the string
console.log(`Slice: ${course.slice(0, 10)}`);

// Searching
// .includes(searchString, position?): check if the string exist(case-sensitive)
console.log("Includes:", course.includes("Web"));
console.log("Includes with starting position:", course.includes("Web", 15));

// .startsWith(searchString, position?): check if the string starts with a substring.
console.log("Starts With Full:", course.startsWith("Full"));

// .endsWith(searchString, position?): check if the string ends with a substring.
console.log("Ends With Development:", course.endsWith("Development"));

// .indexOf(searchString, position?): return the first occurance of the string
console.log("Index Of:", course.indexOf("Stack"));
console.log("Index Of:", course.indexOf("e"));

// .lastIndexOf(searchString, position?): return the last occurance of the string
console.log("Last Index Of:", course.lastIndexOf("e"));

// .replace(stringToReplace, newString): replace the substring with a new string.
console.log("Replace:", course.replace("Web", "Website"));

// .split(splitter): return an array with each word as an element.
console.log("Split:", course.split(" "));

// .trim(): remove whitespaces from both ends
let message = "             Hello World                  ";
console.log("Trim Start:", message.trimStart());
console.log("Trim End:", message.trimEnd());
console.log("Trim:", message.trim());
