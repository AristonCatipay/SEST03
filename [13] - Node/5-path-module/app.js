// Path Module:
// provides utilities for working with file and directory path.

const path = require("node:path");

// console.log(module);
console.log("Filename:", __filename);
console.log("Directory name:", __dirname);

/*
Absolute Path: C:\\Users\\Username\\Desktop\\SEST03\\[13] - Node\\5-path-module

Relative Path:
.\..\\..\\5-path-module
*/

// .basename(filePath): returns the last segment/portion of the filepath.
console.log("== basename ==");
console.log("File name:", path.basename(__filename));
console.log("Directory name:", path.basename(__dirname));

// .extname(): returns the extension of the path.
console.log("== Extension ==");
console.log("Extension:", path.extname(__filename));

// .parse(): returns an objet with significant properties of the path.
const parseObject = path.parse(__filename);
console.log("Parse Object:", parseObject);
console.log("Name:", parseObject.name);

// .format(): returns a path string given an object.
console.log("== Format ==");
const pathString = path.format(parseObject);
console.log("Path:", pathString);

/*
Segment Seperator:
/ - Mac & Linux
\ - Windows
*/

// isAbsolute(): check if the string is an absolute filepath.
// Return: true (absolute) false (relative)
const relativePath = "./../file.js";
const isAbsolute = path.isAbsolute(pathString);
console.log("Is Absolute:", isAbsolute);
console.log("Is Absolute:", path.isAbsolute(relativePath));

// .normalize(): normalizes a path by resolving '..' and '.' segments.
const complexPath = "./username/document/mine/../../files/app.js";
const normalizedPath = path.normalize(complexPath);
console.log("Normalized Path:", normalizedPath);

// directory1
// directory2
// directory3
// file.js

// .join(): combines path segments into a single, platform independent path string.
const joinedPath = path.join(
  "directory1",
  "directory2",
  "directory3",
  "file.js"
);
console.log("Joined Path:", joinedPath);
console.log("Absolute:", path.isAbsolute(joinedPath));

// .resolve(): resolved the sequence of path or path segments. It will take into consideration the current working directory.
const resolvedPath = path.resolve(
  "directory1",
  "directory2",
  "directory3",
  "file.js"
);
console.log("Resolved Path:", resolvedPath);
