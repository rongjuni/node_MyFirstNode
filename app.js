console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Hello World</h1>");
    response.end();
  })
  .listen(3000, () => {
    console.log("listening server at 3000");
  });

// Finish setting up the server
