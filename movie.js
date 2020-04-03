const express = require("express");
const app = express();
const connection = require("./config");
// listen to "/api/MOVIE"
app.get("/api/movie", (req, res) => {
  // connection to the database, and selection of movie
  connection.query("SELECT * FROM MOVIE", (err, results) => {
    if (err) {
      //  If an error has occurred, then the user is informed of the error
      res.status(500).send("Error retrieving all movies");
    } else {
      // If everything went well, we send the result of the SQL query as JSON.
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

// All movies name

const express = require("express");
const app = express();
const connection = require("./config");

app.get("/api/movie/name", (req, res) => {
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
