const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/users") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const newUser = JSON.parse(body);

      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          message: "User recieved",
          user: newUser,
        }),
      );
    });
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});


server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});