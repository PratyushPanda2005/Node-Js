const express = require("express");

const app = express();

app.get("/users/:id", (req, res) => {
  res.json({
    message: "User found",
    userId: req.params.id
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
