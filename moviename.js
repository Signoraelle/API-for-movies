const express = require("express");
const app = express();
const connection = require("./config");

app.get("/api/MOVIE", (req, res) => {
  connection.query("SELECT name FROM MOVIE", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving names from movies");
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, err => {
  if (err) {
    throw new Error("Alert alert");
  }
  console.log("Listening on port 3000");
});
