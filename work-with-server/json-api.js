const http = require("http");

const users = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Ravi" }
];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/users") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(users));
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
