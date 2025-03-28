// http built-in module: allows you to create web servers.

const http = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

// .createServer(callback): create a http server.
const server = http.createServer((req, res) => {
  // res.writeHead(statusCode, header)
  res.writeHead(200, { "Content-Type": "text/plain" });
  // res.end(): response body.
  res.end("Hello! Welcome to your first server!");
});

// server.listen(port, hostname, callback)
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
