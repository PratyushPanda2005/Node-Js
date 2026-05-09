const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Method:", req.method());
  console.log("URL:", req.url());
  console.log("Headers:", req.headers());

  const user = {
    id: 1,
    name: "Asha",
    role: "student",
  };

  res.setHeader("Content-Type", "text/plain"); // This tells the client what kind of data is being sent.
  res.setHeader("Content-Type", "text/html"); // Sends HTML
  res.setHeader("Content-Type", "application/json");

  res.end(JSON.stringify(user))

  res.end("Response Sent"); // This sends the response and finishes it.
});

server.listen(3000, () => {
  console.log("Server running on localhost:3000");
});

/*
req.method
Tells you what kind of request it is.

Common methods:

GET = get data
POST = send new data
PUT = update data
DELETE = remove data
*/

/*
req.url
Tells you which path the client asked for.

Examples:

/
/about
/users

*/

/*
req.headers
Extra information sent by the browser or client.

Example:

content type
browser info
authorization token

*/
