// This is the start of routing.

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("Home page");
  } else if (req.url === "/about" && req.method === "GET") {
    res.end("About page");
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
