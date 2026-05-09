const express = require("express") // Loads Express.

const app = express() // Creates an Express app.

app.get("/", (req,res) => {
    res.send("Hello from Express")
})

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/contact", (req, res) => {
  res.send("Contact page");
});

app.listen(3000, () => {
    console.log("running on http://localhost:3000");
    
})