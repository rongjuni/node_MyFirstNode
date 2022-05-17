// Exercise 1 Section

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
