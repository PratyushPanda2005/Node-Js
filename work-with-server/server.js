const http = require("http") // Loads Node’s built-in HTTP module.


/**
 * 
Creates a server.
This function runs every time someone sends a request.
req = request coming in
res = response going out
 */

const server = http.createServer((req,res) => {
    res.end("Hello from server")
})

// Starts the server on port 3000.

server.listen(3000, ()=>{
    console.log("Server is running on localhost:3000");
    
})

/** 
When you open a URL in the browser, the browser sends a request.

Example:

browser asks: “give me /”
server responds: "Hello from server"
 */